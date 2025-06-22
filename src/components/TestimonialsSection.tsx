
import { useState } from 'react';
import { Play, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const testimonials = [
    {
      name: "Ravi Kumar",
      exam: "SSC CGL 2024 - AIR 45",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      quote: "SSS Coaching Classes transformed my preparation strategy completely."
    },
    {
      name: "Priya Sharma",
      exam: "NEET 2024 - AIR 156",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=300&fit=crop",
      quote: "The faculty here made complex topics seem so simple and easy to understand."
    },
    {
      name: "Amit Singh",
      exam: "JEE Main 2024 - 99.2%",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
      quote: "Best coaching institute in Jaunpur with excellent study material and guidance."
    }
  ];

  const textTestimonials = [
    {
      name: "Sneha Gupta",
      exam: "CUET 2024",
      rating: 5,
      text: "The personalized attention and regular mock tests helped me score 99.8 percentile in CUET. The faculty is extremely supportive and always available for doubt clearing sessions."
    },
    {
      name: "Vikash Yadav",
      exam: "CTET 2024",
      rating: 5,
      text: "Excellent teaching methodology and comprehensive study material. The pedagogy classes were particularly helpful for CTET preparation. Highly recommended!"
    },
    {
      name: "Anita Sharma",
      exam: "UPPCS 2024",
      rating: 5,
      text: "The current affairs sessions and answer writing practice gave me the edge I needed. Finally cleared UPPCS mains after joining SSS Coaching Classes."
    }
  ];

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-blue mb-4 font-poppins">
            What Our Students Say
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our successful students about their journey with us
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-brand-blue text-center mb-8 font-poppins">
            Video Testimonials
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group cursor-pointer" onClick={() => openVideoModal(testimonial.video)}>
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={testimonial.thumbnail} 
                    alt={testimonial.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-brand-blue ml-1" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-bold text-brand-blue font-poppins">{testimonial.name}</h4>
                  <p className="text-accent text-sm">{testimonial.exam}</p>
                  <p className="text-gray-600 text-sm mt-2 italic">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-brand-blue text-center mb-8 font-poppins">
            Student Reviews
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {textTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-brand-light p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-accent mr-3" />
                  <div className="flex text-accent">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-brand-blue font-poppins">{testimonial.name}</h4>
                  <p className="text-accent text-sm">{testimonial.exam}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={closeVideoModal}>
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={closeVideoModal}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-accent"
              >
                ✕
              </button>
              <div className="aspect-video">
                <iframe
                  src={selectedVideo}
                  title="Student Testimonial"
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
