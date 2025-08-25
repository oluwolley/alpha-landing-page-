'use client';

import { Inbox, Ticket, Bot, Zap, BarChart3 } from 'lucide-react';
import { useState } from 'react';

interface FeatureTabsProps {
  onTabChange?: (tabIndex: number) => void;
}

const FeatureTabs = ({ onTabChange }: FeatureTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    { icon: Inbox, label: 'Shared Inbox' },
    { icon: Ticket, label: 'Ticketing' },
    { icon: Bot, label: 'AI Agent' },
    { icon: Zap, label: 'Automation' },
    { icon: BarChart3, label: 'Insights' },
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <section className="bg-[#2A0A4A] py-16 px-4 md:px-6 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Mobile: Horizontal scrollable, Desktop: Wrapped flex */}
        <div className="md:hidden overflow-x-auto pb-2 feature-tabs-mobile">
          <div className="flex gap-3 min-w-max px-2">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => handleTabClick(index)}
                className={`flex flex-col items-center text-white hover:text-yellow-400 transition-colors cursor-pointer group rounded-lg px-3 py-3 flex-shrink-0 ${
                  index === activeTab 
                    ? 'bg-purple-500/10 text-white' 
                    : ''
                }`}
              >
                <div className={`w-10 h-10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform ${
                  index === activeTab ? 'text-white' : 'text-white'
                }`}>
                  <feature.icon size={24} />
                </div>
                <span className={`text-xs font-medium text-center ${
                  index === activeTab ? 'text-white' : 'text-white'
                }`}>{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Wrapped flex layout */}
        <div className="hidden md:flex flex-wrap justify-center gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
              className={`flex flex-row items-center text-white hover:text-yellow-400 transition-colors cursor-pointer group rounded-lg px-4 py-3 ${
                index === activeTab 
                  ? 'bg-purple-500/10 text-white' 
                  : ''
              }`}
            >
              <div className={`w-12 h-12 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform ${
                index === activeTab ? 'text-white' : 'text-white'
              }`}>
                <feature.icon size={28} />
              </div>
              <span className={`text-sm font-medium ${
                index === activeTab ? 'text-white' : 'text-white'
              }`}>{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;
