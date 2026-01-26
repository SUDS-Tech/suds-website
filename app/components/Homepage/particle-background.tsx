"use client";

/**
 * Copyright (c) 2026 SUDS Technologies Ltd.
 *
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, or distribution
 * of this file is strictly prohibited.
 */


"use client";

import { useEffect, useState } from "react";

export default function ParticleBackground() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    
    setMounted(true);

    
    const generated = [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 5}s`,
    }));
    
    setParticles(generated);
  }, []);

  
  if (!mounted) return <div className="absolute inset-0 overflow-hidden" />;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-1 h-1 bg-emerald-500/30 rounded-full animate-float"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
