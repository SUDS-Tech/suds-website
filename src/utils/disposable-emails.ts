/**
 * Copyright (c) 2026 SUDS Technologies Ltd.
 *
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, or distribution
 * of this file is strictly prohibited.
 */



/**
 * unique disposable email domains
 */
let disposableDomains = new Set<string>();

async function loadDisposableDomains(){
    const response = await fetch("https://rawcdn.githack.com/disposable/disposable-email-domains/master/domains.json"
  );

  const domains: string[] = await response.json();
  disposableDomains = new Set(domains.map((domain) => domain.toLowerCase()));
}

export function isDisposableEmail(email: string): boolean{
    const domain = email.split('@')[1];
    return disposableDomains.has(domain);
}

loadDisposableDomains();