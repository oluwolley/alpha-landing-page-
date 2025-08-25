'use client';

import { Star, Clock, AlertCircle, Mail, MessageSquare, Bot, Zap, BarChart3 } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ProductPreviewProps {
  selectedTab?: number;
}

interface Email {
  id: number;
  sender: string;
  subject: string;
  time: string;
  badge: string | null;
  urgent: boolean;
}

interface Ticket {
  id: number;
  title: string;
  status: string;
  priority: string;
  assignee: string;
}

interface Conversation {
  id: number;
  customer: string;
  message: string;
  aiResponse: string;
  satisfaction: string;
}

interface Workflow {
  id: number;
  name: string;
  trigger: string;
  status: string;
  lastRun: string;
}

interface Metric {
  name: string;
  value: string;
  change: string;
  trend: string;
}

interface Feature {
  title: string;
  icon: LucideIcon;
  description: string;
  content: {
    emails?: Email[];
    selectedEmail?: Email;
    tickets?: Ticket[];
    conversations?: Conversation[];
    workflows?: Workflow[];
    metrics?: Metric[];
  };
}

const ProductPreview = ({ selectedTab = 0 }: ProductPreviewProps) => {
  const features: Feature[] = [
    {
      title: 'Shared Inbox',
      icon: Mail,
      description: 'Manage all customer conversations in one unified inbox',
      content: {
        emails: [
          { id: 1, sender: 'Sarah Johnson', subject: 'Product feedback request', time: '2 min ago', badge: 'VIP', urgent: false },
          { id: 2, sender: 'Mike Chen', subject: 'Technical support needed', time: '15 min ago', badge: 'Urgent', urgent: true },
          { id: 3, sender: 'Emily Davis', subject: 'Partnership inquiry', time: '1 hour ago', badge: null, urgent: false },
          { id: 4, sender: 'Alex Thompson', subject: 'Feature request', time: '2 hours ago', badge: null, urgent: false },
        ],
        selectedEmail: { id: 1, sender: 'Sarah Johnson', subject: 'Product feedback request', time: '2 min ago', badge: 'VIP', urgent: false }
      }
    },
    {
      title: 'Ticketing',
      icon: MessageSquare,
      description: 'Organize and track customer support tickets efficiently',
      content: {
        tickets: [
          { id: 1, title: 'Login issue resolved', status: 'Closed', priority: 'High', assignee: 'John Doe' },
          { id: 2, title: 'Payment processing error', status: 'In Progress', priority: 'Urgent', assignee: 'Jane Smith' },
          { id: 3, title: 'Feature request: Dark mode', status: 'Open', priority: 'Medium', assignee: 'Unassigned' },
        ]
      }
    },
    {
      title: 'AI Agent',
      icon: Bot,
      description: 'Intelligent AI-powered customer support automation',
      content: {
        conversations: [
          { id: 1, customer: 'User123', message: 'How do I reset my password?', aiResponse: 'I can help you reset your password. Please check your email for a reset link.', satisfaction: 'Positive' },
          { id: 2, customer: 'User456', message: 'What are your business hours?', aiResponse: 'We&apos;re available 24/7 for online support. Our phone support is available Monday-Friday 9 AM - 6 PM EST.', satisfaction: 'Positive' },
        ]
      }
    },
    {
      title: 'Automation',
      icon: Zap,
      description: 'Streamline workflows with powerful automation rules',
      content: {
        workflows: [
          { id: 1, name: 'Welcome Email', trigger: 'New Signup', status: 'Active', lastRun: '2 hours ago' },
          { id: 2, name: 'Follow-up Survey', trigger: 'Ticket Closed', status: 'Active', lastRun: '1 day ago' },
          { id: 3, name: 'Escalation Alert', trigger: 'High Priority', status: 'Active', lastRun: '5 minutes ago' },
        ]
      }
    },
    {
      title: 'Insights',
      icon: BarChart3,
      description: 'Data-driven analytics and performance metrics',
      content: {
        metrics: [
          { name: 'Response Time', value: '2.3 min', change: '+12%', trend: 'up' },
          { name: 'Customer Satisfaction', value: '4.8/5', change: '+5%', trend: 'up' },
          { name: 'Resolution Rate', value: '94%', change: '+3%', trend: 'up' },
        ]
      }
    }
  ];

  const currentFeature = features[selectedTab];

  const renderContent = () => {
    switch (selectedTab) {
      case 0: // Shared Inbox
        return (
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-gray-200">
              {currentFeature.content.emails?.map((email) => (
                <div
                  key={email.id}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    email.id === currentFeature.content.selectedEmail?.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{email.sender}</span>
                      {email.badge && (
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          email.badge === 'VIP' ? 'bg-purple-100 text-purple-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {email.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{email.time}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{email.subject}</p>
                  <div className="flex items-center space-x-2">
                    {email.urgent && <AlertCircle className="w-4 h-4 text-red-500" />}
                    <Clock className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">{currentFeature.content.selectedEmail?.subject}</h4>
                  <Star className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer" />
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">SJ</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{currentFeature.content.selectedEmail?.sender}</p>
                    <p className="text-sm text-gray-500">{currentFeature.content.selectedEmail?.time}</p>
                  </div>
                  {currentFeature.content.selectedEmail?.badge && (
                    <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-800">
                      {currentFeature.content.selectedEmail.badge}
                    </span>
                  )}
                </div>
              </div>
              <div className="prose prose-sm text-gray-700">
                <p className="mb-4">
                  Hi there! I&apos;ve been using your platform for the past few weeks and I&apos;m really impressed with the features.
                </p>
                <p className="mb-4">
                  I wanted to share some feedback about the user experience and suggest a few improvements that could make it even better.
                </p>
                <p>
                  Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        );

      case 1: // Ticketing
        return (
          <div className="p-6">
            <div className="grid gap-4">
              {currentFeature.content.tickets?.map((ticket) => (
                <div key={ticket.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{ticket.title}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      ticket.status === 'Closed' ? 'bg-green-100 text-green-800' :
                      ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {ticket.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>Priority: {ticket.priority}</span>
                    <span>Assignee: {ticket.assignee}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2: // AI Agent
        return (
          <div className="p-6">
            <div className="space-y-4">
              {currentFeature.content.conversations?.map((conv) => (
                <div key={conv.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="mb-3">
                    <span className="text-sm font-medium text-gray-900">{conv.customer}</span>
                    <span className="text-xs text-gray-500 ml-2">• {conv.satisfaction}</span>
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-l-purple-500 mb-2">
                    <p className="text-sm text-gray-700">{conv.message}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border-l-4 border-l-green-500">
                    <p className="text-sm text-gray-700">{conv.aiResponse}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3: // Automation
        return (
          <div className="p-6">
            <div className="grid gap-4">
              {currentFeature.content.workflows?.map((workflow) => (
                <div key={workflow.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{workflow.name}</h4>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      {workflow.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Trigger: {workflow.trigger}</p>
                    <p>Last Run: {workflow.lastRun}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4: // Insights
        return (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentFeature.content.metrics?.map((metric) => (
                <div key={metric.name} className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</h4>
                  <p className="text-sm text-gray-600 mb-2">{metric.name}</p>
                  <span className={`text-sm ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="bg-[#2A0A4A] py-12 px-4 md:px-6 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gray-50 px-4 md:px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
              <h3 className="text-lg font-semibold text-gray-800">{currentFeature.title}</h3>
              <div className="flex items-center space-x-2">
                <currentFeature.icon className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600">{currentFeature.description}</span>
              </div>
            </div>
          </div>

          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
