'use client';

const Hero = () => {
  return (
    <section className="bg-[#2A0A4A] py-20 px-4 md:px-6 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          AI-Powered tool built for Customer Support team
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Alpha gives you complete control over AI and automation to deliver top-quality service you can trust.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-yellow-400 text-[#2A0A4A] rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors shadow-lg">
            Request a demo
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-[#2A0A4A] transition-colors">
            Start free trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
