/**
 * Copyright (c) 2026 SUDS Technologies Ltd.
 *
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, or distribution
 * of this file is strictly prohibited.
 */

import { AppDataSource } from '../config/db';
import { RateLimit } from '../entities/rate-limit.entity';
import { LessThan } from 'typeorm';

export class RateLimitService {
  private readonly repository = AppDataSource.getRepository(RateLimit);
  private readonly windowMs: number = 60 * 60 * 1000; // 1 hour
  private readonly maxRequests: number = 10;

  async checkRateLimit(identifier: string): Promise<boolean> {
    const windowStart = new Date(Date.now() - this.windowMs);

    // Clean up old entries
    await this.repository.delete({
      windowStart: LessThan(windowStart),
    });

    // Find or create rate limit entry
    let rateLimit = await this.repository.findOne({
      where: {
        identifier,
        windowStart: LessThan(new Date()),
      },
    });

    if (!rateLimit) {
      rateLimit = this.repository.create({
        identifier,
        requestCount: 1,
        windowStart: new Date(),
      });
      await this.repository.save(rateLimit);
      return true;
    }

    if (rateLimit.requestCount >= this.maxRequests) {
      return false;
    }

    rateLimit.requestCount += 1;
    await this.repository.save(rateLimit);
    return true;
  }

  async getRemainingRequests(identifier: string): Promise<number> {
    const windowStart = new Date(Date.now() - this.windowMs);
    const rateLimit = await this.repository.findOne({
      where: {
        identifier,
        windowStart: LessThan(new Date()),
      },
    });

    if (!rateLimit) return this.maxRequests;

    return Math.max(0, this.maxRequests - rateLimit.requestCount);
  }
}