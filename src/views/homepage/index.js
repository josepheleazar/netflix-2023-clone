import React from 'react';

import HomepageSubscriptionSection from './HomepageSubscriptionSection';
import HomepageFeatureSection from './HomepageFeatureSection';
import HomepageFAQSection from './HomepageFAQSection';

export default function homepage() {
  return(
    <main>
      <HomepageSubscriptionSection />
      <HomepageFeatureSection />
      <HomepageFAQSection />
    </main>
  );
}