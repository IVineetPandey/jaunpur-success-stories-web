
import { Phone, Mail, MessageSquare } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-brand-blue text-white py-2 px-4 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp: +91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>info@sssinstitute.com</span>
          </div>
        </div>
        <button className="bg-accent text-brand-blue px-4 py-1 rounded-md font-medium hover:bg-yellow-400 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default TopBar;
