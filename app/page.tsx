/**
 * Copyright (c) 2026 SUDS Tech Company Ltd.
 *
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, or distribution
 * of this file is strictly prohibited.
 */

import BusinessProcess from "./components/Homepage/header";
import Services from "./components/Homepage/main/main";
import Option from "./components/Homepage/main/option";
import Testimonials from "./components/Homepage/testimonials";

export default function Home() {
  return (
    <main>
      <BusinessProcess />
      <Services />
      <Testimonials />
      <Option />
    </main>
  );
}
