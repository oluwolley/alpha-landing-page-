'use client';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Google',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
      text: 'Alpha AI has completely transformed the way our team collaborates with customers. The automation features are a game changer.'
    },
    {
      id: 2,
      name: 'James Carter',
      role: 'Operations Lead',
      company: 'Deliveroo',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      text: 'We scaled support effortlessly thanks to Alpha AI. Our response times dropped by 50% and customer satisfaction is at an all-time high.'
    },
    {
      id: 3,
      name: 'Aisha Patel',
      role: 'Growth Lead',
      company: 'TikTok',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      text: 'The integration was seamless and the insights we now get are invaluable. Alpha AI is the future of customer experience and will transform how businesses operate.'
    }
  ];

  return (
    <section className="bg-[#2A0A4A] py-20 px-4 md:px-6 w-full overflow-hidden relative">
      {/* Diagonal Border Decorations */}
      {/* Top-left diagonal */}
      <div className="absolute top-0 left-0 w-0 h-0 border-l-[200px] border-l-transparent border-t-[200px] border-t-white opacity-20"></div>
      
      {/* Top-right diagonal */}
      <div className="absolute top-0 right-0 w-0 h-0 border-r-[200px] border-r-transparent border-t-[200px] border-t-white opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What our customers say
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            Trusted by teams and businesses around the world.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 group"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} avatar`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=6366f1&color=fff&size=80`;
                    }}
                  />
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-white/90 italic text-base leading-relaxed mb-6 text-center min-h-[4.5rem] flex items-center justify-center">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="text-center">
                <h4 className="text-white font-bold text-lg mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-gray-300 text-sm">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
