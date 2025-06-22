
const AboutSection = () => {
  return (
    <section id="about-us" className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-brand-blue mb-4 font-poppins">
                About SSS Institute of Education
              </h2>
              <div className="w-20 h-1 bg-accent mb-6"></div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Established on 10 June 2022, SSS Institute of Education has been a beacon of educational excellence in Jaunpur. 
              We specialize in comprehensive preparation for competitive examinations including SSC, JEE, NEET, 
              CUET, BHU entrance, Navodaya Entrance, and various government job exams like CTET, TET, S-TET, and UPPCS.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to transform the dreams of students into reality by providing quality education, 
              experienced faculty, and a nurturing environment. With a proven track record of 91% success rate 
              in SSC examinations and numerous top ranks in JEE and NEET, we take pride in shaping success 
              stories from Jaunpur.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue font-poppins">3+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue font-poppins">1000+</div>
                <div className="text-gray-600">Students Guided</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue font-poppins">91%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                    alt="Mr. Roshan Mishra - Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-brand-blue font-poppins">Mr. Roshan Mishra</h3>
                <p className="text-gray-600">Founding Member & Director</p>
                <p className="text-sm text-gray-500">M.Sc. (Chemistry), B.Ed.</p>
              </div>
              <blockquote className="text-gray-700 italic text-center leading-relaxed">
                "Education is the most powerful weapon which you can use to change the world. 
                At SSS Institute of Education, we are committed to empowering every student with 
                knowledge and confidence to achieve their dreams."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
