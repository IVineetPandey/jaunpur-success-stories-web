
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    exam: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      exam: '',
      message: ''
    });
  };

  const examOptions = [
    'Foundation (Class 6-8)',
    'Foundation (Class 9-10)', 
    'Foundation (Class 11-12)',
    'SSC (CGL, CHSL, MTS)',
    'JEE Main/Advanced',
    'NEET',
    'CUET',
    'BHU Entrance',
    'Navodaya Entrance',
    'CTET/TET/S-TET',
    'UPPCS',
    'School Academics (VI-XII)',
    'Other'
  ];

  return (
    <section id="contact" className="py-12 md:py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 font-poppins">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            Get in touch with us for admissions, course details, or any queries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-blue mb-4 md:mb-6 font-poppins">
                Get In Touch
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-brand-blue p-2 md:p-3 rounded-lg text-white flex-shrink-0">
                    <MapPin className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue mb-1 text-sm md:text-base">Address</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      SSS Institute of Education<br />
                      Pattinarendrapur<br />
                      Jaunpur, Uttar Pradesh - 222001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-brand-blue p-2 md:p-3 rounded-lg text-white flex-shrink-0">
                    <Phone className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue mb-1 text-sm md:text-base">Phone</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      +91 79056 76660<br />
                      WhatsApp: +91 79056 76660
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-brand-blue p-2 md:p-3 rounded-lg text-white flex-shrink-0">
                    <Mail className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue mb-1 text-sm md:text-base">Email</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      roshanmishra231201@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-brand-blue p-2 md:p-3 rounded-lg text-white flex-shrink-0">
                    <Clock className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue mb-1 text-sm md:text-base">Office Hours</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Monday - Saturday: 8:00 AM - 7:00 PM<br />
                      Sunday: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.123!2d82.6844!3d25.7539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31fb74fcfff%3A0x5ea20c76faa10b57!2sPattinarendrapur%2C%20Jaunpur%2C%20Uttar%20Pradesh%20222001!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SSS Institute of Education Location"
                className="md:h-[250px]"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-brand-blue mb-4 md:mb-6 font-poppins">
              Quick Enquiry
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all text-sm md:text-base"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all text-sm md:text-base"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all text-sm md:text-base"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="exam" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                  Interested Exam/Course *
                </label>
                <select
                  id="exam"
                  name="exam"
                  value={formData.exam}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all text-sm md:text-base"
                >
                  <option value="">Select an exam/course</option>
                  {examOptions.map((exam, index) => (
                    <option key={index} value={exam}>{exam}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all resize-none text-sm md:text-base"
                  placeholder="Enter your message or specific queries"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-blue text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
                <span>Send Enquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
