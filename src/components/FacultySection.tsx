
import { GraduationCap, BookOpen, Users } from 'lucide-react';

const FacultySection = () => {
  const faculty = [
    {
      name: "Mr. Roshan Mishra",
      subject: "Chemistry & Director",
      qualification: "M.Sc. (Chemistry), B.Ed.",
      experience: "9+ years",
      image: "/lovable-uploads/e47dce38-5dd8-4c8f-bb85-e0f8bac5319f.png",
      specialization: "Physical & Organic Chemistry",
      achievements: "Founding Member & Director with 9 years of classroom experience. Specializes in Physical & Organic Chemistry for boards, JEE, and NEET preparations.",
      bio: "Expert in Physical & Organic Chemistry with extensive classroom experience. Leads chemistry preparation for JEE, NEET, and board examinations with innovative teaching methodologies.",
      position: "20%"
    },
    {
      name: "Mr. Rohan Mishra",
      subject: "Biology & Botany",
      qualification: "M.Sc. (Botany), B.Ed.",
      experience: "8+ years",
      image: "/lovable-uploads/54d64cfd-d2f3-4a5c-8fc8-0612d4d755de.png",
      specialization: "Plant Physiology & Ecology",
      achievements: "Senior Faculty specializing in Biology for NEET and Navodaya Entrance",
      bio: "Expert in Plant Physiology & Ecology with deep understanding of biological concepts. Leads Biology preparation for NEET and Navodaya Entrance with comprehensive coverage of syllabus.",
      position: "30%"
    },
    {
      name: "Mr. Manish Tripathi",
      subject: "Mathematics",
      qualification: "M.Sc. (Mathematics)",
      experience: "10+ years",
      image: "/lovable-uploads/937bf5c4-4db9-4cc1-8131-83146ccfb6d5.png",
      specialization: "Algebra, Calculus & Quantitative Aptitude",
      achievements: "Senior Faculty heading Mathematics for SSC, IIT-JEE and CUET",
      bio: "Specialist in Algebra, Calculus & Quantitative Aptitude with proven track record. Heads Mathematics preparation for SSC, IIT-JEE and CUET with focus on problem-solving techniques.",
      position: "25%"
    }
  ];

  return (
    <section id="faculty" className="py-12 md:py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 font-poppins">
            Our Expert Faculty
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            Learn from experienced educators with proven expertise in their respective fields
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {faculty.map((teacher, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: `50% ${teacher.position}` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-brand-blue mb-2 font-poppins">
                  {teacher.name}
                </h3>
                <p className="text-accent font-medium mb-3 text-sm md:text-base">
                  {teacher.subject}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-xs md:text-sm">
                    <GraduationCap className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    {teacher.qualification}
                  </div>
                  <div className="flex items-center text-gray-600 text-xs md:text-sm">
                    <BookOpen className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    Experience: {teacher.experience}
                  </div>
                  <div className="flex items-center text-gray-600 text-xs md:text-sm">
                    <Users className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    {teacher.specialization}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {teacher.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button className="bg-brand-blue text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium text-sm md:text-base">
            View All Faculty
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
