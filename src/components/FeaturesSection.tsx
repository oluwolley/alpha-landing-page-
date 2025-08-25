'use client';

import { Mail, MessageSquare, MessageCircle, Phone, Zap, TrendingUp } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: 'Email API',
      description: 'Send transactional emails, marketing campaigns, and automated workflows with our powerful email API.',
      icon: Mail
    },
    {
      id: 2,
      title: 'SMS API',
      description: 'Deliver SMS messages globally with high deliverability rates and real-time delivery status.',
      icon: MessageSquare
    },
    {
      id: 3,
      title: 'WhatsApp API',
      description: 'Integrate WhatsApp Business messaging for customer support and automated conversations.',
      icon: MessageCircle
    },
    {
      id: 4,
      title: 'Numbers API',
      description: 'Manage phone numbers, routing, and call handling with our comprehensive telephony API.',
      icon: Phone
    },
    {
      id: 5,
      title: 'Power MTA',
      description: 'High-performance mail transfer agent for enterprise email delivery and reputation management.',
      icon: Zap
    },
    {
      id: 6,
      title: 'Momentum',
      description: 'Advanced analytics and insights to optimize your customer communication strategies.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-6 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The AI-first omnichannel for Customer Support
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Access our suite of APIs to unify customer data, automate communications, and power AI-driven experiences at scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 group"
            >
              {/* Icon Badge */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-200">
                <feature.icon className="w-6 h-6 text-gray-500 group-hover:text-gray-600" />
              </div>

              {/* Feature Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[3.5rem]">
                {feature.description}
              </p>

              {/* CTA Button */}
              <button className="w-full py-2 px-4 border border-gray-300 text-gray-600 text-sm font-normal rounded-md hover:bg-gray-100 hover:border-gray-400 hover:text-gray-700 transition-all duration-200">
                View {feature.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
