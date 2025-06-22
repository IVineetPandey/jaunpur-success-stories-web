
import { Calendar, Phone } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 font-poppins">
          Ready to Start Your Success Journey?
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Book a free counselling session with our expert advisors and choose the right course for your career goals
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <button className="bg-accent text-brand-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto">
            <Calendar className="w-5 h-5" />
            <span>Book Free Counselling</span>
          </button>
          
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-brand-blue transition-colors flex items-center space-x-2 w-full sm:w-auto">
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </button>
        </div>
        
        <div className="mt-8 text-blue-200">
          <p className="text-sm">💡 Limited seats available for the new batch starting July 2025</p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
