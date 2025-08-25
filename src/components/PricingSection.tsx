'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 1,
      name: 'Basic',
      monthlyPrice: 45,
      annualPrice: 38,
      description: 'Perfect for small teams getting started',
      color: 'text-blue-600',
      buttonText: 'Start Free Trial',
      buttonVariant: 'primary',
      features: [
        'Unlimited users',
        'Up to 4 social profiles ($20/mo for additional)',
        'Shared inbox and Omnichannel (email, SMS, social, etc.)',
        'Notion-like editor for drafting and collaboration',
        'Approvals, notifications, and collaboration tools',
        'Analytics for Twitter, LinkedIn, FB, and IG (14 days)'
      ]
    },
    {
      id: 2,
      name: 'Standard',
      monthlyPrice: 140,
      annualPrice: 119,
      description: 'Great for growing businesses',
      color: 'text-green-600',
      buttonText: 'Start Free Trial',
      buttonVariant: 'primary',
      features: [
        'Everything in Basic, plus:',
        'Up to 4 social profiles ($20/mo for additional)',
        'Automated engagement (likes, comments, reposts) on Twitter, LinkedIn, Instagram',
        'Automated scheduling to Webflow CMS',
        'Analytics for Twitter, LinkedIn, FB, IG (All Time)',
        'Schedule via CSV'
      ]
    },
    {
      id: 3,
      name: 'Enterprise',
      monthlyPrice: null,
      annualPrice: null,
      description: 'For large organizations with custom needs',
      color: 'text-amber-600',
      buttonText: 'Book a Demo',
      buttonVariant: 'secondary',
      features: [
        'Everything in Standard, plus:',
        'Multiple workspaces',
        'Custom webhooks',
        'Lead lists of top engagers with CRM integrations',
        'Dedicated Slack channel with founders for priority support',
        'Dedicated onboarding session',
        'SAML / SSO Sign-On'
      ]
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null) return 'Custom';
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    return `$${price}/${isAnnual ? 'Mo.' : 'Mo.'}`;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null) return null;
    const savings = Math.round(((plan.monthlyPrice - plan.annualPrice) / plan.monthlyPrice) * 100);
    return savings > 0 ? `Save ${savings}%` : null;
  };

  return (
    <section className="bg-white py-20 px-4 md:px-6 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Pricing
          </h2>
          
          {/* Toggle Buttons */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 mb-8">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isAnnual
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Pay Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isAnnual
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Pay Annually
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300 group"
            >
              {/* Plan Header */}
              <div className="text-left mb-8">
                <h3 className={`text-lg font-semibold uppercase tracking-wide mb-2 ${plan.color}`}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {getPrice(plan)}
                  </span>
                  {plan.monthlyPrice && (
                    <span className="text-gray-500 text-sm ml-2">
                      {isAnnual ? 'billed annually' : 'billed monthly'}
                    </span>
                  )}
                </div>
                {getSavings(plan) && (
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                    {getSavings(plan)}
                  </span>
                )}
                <p className="text-gray-600 text-sm mt-3">
                  {plan.description}
                </p>
              </div>

              {/* Extra spacing above button for Enterprise card */}
              {plan.id === 3 && <div className="mb-[57px]"></div>}
              
              {/* CTA Button */}
              <div className="mb-8">
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    plan.buttonVariant === 'primary'
                      ? 'bg-yellow-400 text-[#2A0A4A] hover:bg-yellow-300 shadow-lg'
                      : 'border-2 border-[#2A0A4A] text-[#2A0A4A] hover:bg-[#2A0A4A] hover:text-white'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-8"></div>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
