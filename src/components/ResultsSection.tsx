
import { useState, useEffect } from 'react';
import { Star, Award, TrendingUp } from 'lucide-react';

const ResultsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toppers = [
    {
      name: "Priya Sharma",
      exam: "SSC CGL 2024",
      rank: "AIR 1",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
      score: "95.2%"
    },
    {
      name: "Amit Kumar",
      exam: "JEE Main 2024",
      rank: "AIR 127",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      score: "99.8 Percentile"
    },
    {
      name: "Neha Singh",
      exam: "NEET 2024",
      rank: "AIR 89",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      score: "695/720"
    },
    {
      name: "Rohit Gupta",
      exam: "CUET 2024",
      rank: "99.9 Percentile",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      score: "Top Score"
    },
    {
      name: "Ananya Verma",
      exam: "CTET 2024",
      rank: "Qualified",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face",
      score: "98.5%"
    }
  ];

  const achievements = [
    { icon: <Star className="w-8 h-8" />, title: "91% Success Rate", description: "in SSC Examinations" },
    { icon: <Award className="w-8 h-8" />, title: "500+ Selections", description: "in Government Jobs" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Top 100 Ranks", description: "in JEE & NEET" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % toppers.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="results" className="py-16 bg-gradient-to-br from-brand-blue to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-poppins">
            Results & Achievements
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Our students consistently achieve top ranks and realize their dreams
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-accent mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 font-poppins">
                {achievement.title}
              </h3>
              <p className="text-blue-200">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Toppers Carousel */}
        <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-center mb-8 font-poppins">
            Our Star Performers
          </h3>
          
          <div className="flex justify-center items-center space-x-8 overflow-hidden">
            {toppers.map((topper, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-50 scale-75'
                } ${Math.abs(index - currentIndex) > 1 ? 'hidden' : 'block'}`}
              >
                <div className="bg-white text-brand-blue rounded-lg p-6 text-center min-w-[280px]">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent">
                    <img 
                      src={topper.image} 
                      alt={topper.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-poppins">
                    {topper.name}
                  </h4>
                  <p className="text-brand-blue font-medium mb-1">
                    {topper.exam}
                  </p>
                  <p className="text-accent font-bold text-lg">
                    {topper.rank}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Score: {topper.score}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {toppers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-accent' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
