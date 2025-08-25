'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const LogosCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Logo data with company names and placeholder for actual logo images
  const logos = [
    { name: 'Google', src: '/google-logo.svg' },
    { name: 'Ramp', src: '/ramp-logo.svg' },
    { name: 'Perplexity', src: '/perplexity-logo.svg' },
    { name: 'Dept', src: '/dept-logo.svg' },
    { name: 'Deliveroo', src: '/deliveroo-logo.svg' },
    { name: 'TikTok', src: '/tiktok-logo.svg' },
    { name: 'Huge', src: '/huge-logo.svg' },
  ];

  // Duplicate logos for seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Auto-scroll animation from left to right
    const animate = () => {
      if (isPaused) return;
      
      const scrollLeft = carousel.scrollLeft;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      
      // Debug logging
      console.log('Scroll:', scrollLeft, 'Max:', maxScroll, 'Width:', carousel.scrollWidth, 'Client:', carousel.clientWidth);
      
      if (scrollLeft >= maxScroll) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 2;
      }
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Touch/Mouse drag handlers for mobile
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  return (
    <section className="bg-[#2A0A4A] py-4 px-4 md:px-6 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-gray-300 text-base md:text-lg px-4">
            Join thousands of companies using Alpha to transform their customer experience
          </p>
        </div>
        
        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Fade Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-[#2A0A4A] to-transparent z-10 pointer-events-none" />
          
          {/* Right Fade Effect */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-[#2A0A4A] to-transparent z-10 pointer-events-none" />
          
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex space-x-8 md:space-x-16 items-center py-8 cursor-grab active:cursor-grabbing select-none"
            style={{
              scrollBehavior: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              overflowX: 'auto',
              overflowY: 'hidden',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[150px] md:min-w-[180px] h-16"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={40}
                  className="h-6 md:h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosCarousel;
