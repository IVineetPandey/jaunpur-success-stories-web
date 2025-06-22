
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about-us' },
    { name: 'Courses', href: '#courses' },
    { name: 'Results', href: '#results' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' }
  ];

  const courses = [
    'SSC Preparation',
    'JEE Foundation & Main',
    'NEET Preparation',
    'CUET & BHU Entrance',
    'Teaching Exams (CTET/TET)',
    'UPPCS Preparation'
  ];

  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1">
                  <img 
                    src="/lovable-uploads/040db15d-29ac-4cba-a01e-1394273e8f95.png" 
                    alt="SSS Institute of Education Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins">SSS Institute of Education</h3>
                  <p className="text-blue-200 text-sm">Shaping Success Stories</p>
                </div>
              </div>
              <p className="text-blue-200 leading-relaxed">
                Empowering students from Jaunpur to achieve their dreams through quality education and expert guidance since 2010.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-200">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Civil Lines, Jaunpur, UP 222002</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@sssinstitute.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-blue-200 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Our Courses</h4>
            <div className="space-y-3">
              {courses.map((course, index) => (
                <a
                  key={index}
                  href="#courses"
                  className="block text-blue-200 hover:text-accent transition-colors text-sm"
                >
                  {course}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Stay Connected</h4>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-accent hover:text-brand-blue transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-accent hover:text-brand-blue transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-accent hover:text-brand-blue transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-accent hover:text-brand-blue transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-blue-200 text-sm mb-4">
                Subscribe to get latest updates about admissions and results
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-brand-blue rounded-l-md focus:outline-none"
                />
                <button className="bg-accent text-brand-blue px-4 py-2 rounded-r-md hover:bg-yellow-400 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-200 text-sm text-center md:text-left">
              © 2024 SSS Institute of Education. All rights reserved.
            </div>
            <div className="flex space-x-6 text-blue-200 text-sm">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
