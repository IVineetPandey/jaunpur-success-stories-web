
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Admissions Open 2025-26",
      subtitle: "Join India's Leading Coaching Institute",
      description: "Comprehensive preparation for SSC, JEE, NEET, CUET, and all competitive exams",
      cta: "Apply Now",
      background: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop"
    },
    {
      id: 2,
      title: "91% Selection in SSC 2024",
      subtitle: "Proven Track Record of Excellence",
      description: "Our students consistently achieve top ranks in competitive examinations",
      cta: "View Results",
      background: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop"
    },
    {
      id: 3,
      title: "NEET/JEE Crash Batch Starts 15 July",
      subtitle: "Intensive Preparation Program",
      description: "Expert faculty, comprehensive study material, and regular mock tests",
      cta: "Enroll Now",
      background: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.background})` }}
          >
            <div className="absolute inset-0 bg-brand-blue bg-opacity-70"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl animate-fade-in">
                <h1 className="text-5xl font-bold mb-4 font-poppins leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-2xl mb-4 text-accent font-medium">
                  {slide.subtitle}
                </h2>
                <p className="text-lg mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <button className="bg-accent text-brand-blue px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors transform hover:scale-105">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-accent' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
