'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'What is Alpha AI?',
      answer: 'Alpha AI is an AI-powered platform designed to help businesses streamline communication, automate workflows, and deliver personalized customer experiences.'
    },
    {
      id: 2,
      question: 'How do I start a free trial?',
      answer: 'Simply click on the "Start free trial" button at the top of the page, create an account, and you&apos;ll get instant access to the platform.'
    },
    {
      id: 3,
      question: 'Is there a demo available?',
      answer: 'Yes, you can request a demo anytime using the "Request a demo" button. Our team will guide you through the platform.'
    },
    {
      id: 4,
      question: 'Can I integrate Alpha AI with my existing tools?',
      answer: 'Absolutely. Alpha AI supports integrations with popular tools and APIs to fit seamlessly into your workflow.'
    },
    {
      id: 5,
      question: 'What kind of support do you provide?',
      answer: 'We provide 24/7 customer support via email and live chat to help you whenever you need assistance.'
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-white py-20 px-4 md:px-6 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            If you can&apos;t find the answers to your question below, please email{' '}
            <a href="mailto:help@alpha.ai" className="text-purple-600 hover:text-purple-700 underline transition-colors">
              help@alpha.ai
            </a>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors duration-200"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === faq.id ? (
                    <Minus className="w-5 h-5 text-purple-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-purple-600" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === faq.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
