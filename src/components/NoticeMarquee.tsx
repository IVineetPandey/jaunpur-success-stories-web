
import { Bell } from 'lucide-react';

const NoticeMarquee = () => {
  const notices = [
    "🎉 SSC CGL 2024 Results Out - 91% Success Rate!",
    "📚 New Batch for CUET 2025 starts from July 20th",
    "🏆 Congratulations to our NEET toppers - 95% in Top 1000",
    "📝 Free Mock Test Series available for all enrolled students",
    "🎯 Special scholarship program for meritorious students"
  ];

  return (
    <div className="bg-accent py-3 overflow-hidden">
      <div className="flex items-center">
        <div className="bg-brand-blue text-white px-4 py-2 flex items-center space-x-2 font-semibold">
          <Bell className="w-4 h-4" />
          <span className="whitespace-nowrap">Latest Updates</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-brand-blue font-medium">
            {notices.map((notice, index) => (
              <span key={index} className="inline-block px-8">
                {notice}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeMarquee;
