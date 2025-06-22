
import { GraduationCap, BookOpen, Users } from 'lucide-react';

const FacultySection = () => {
  const faculty = [
    {
      name: "Mr. Roshan Mishra",
      subject: "Chemistry & Director",
      qualification: "M.Sc. (Chemistry), B.Ed.",
      experience: "9+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      specialization: "Physical & Organic Chemistry",
      achievements: "Founding Member & Director with 9 years of classroom experience. Specializes in Physical & Organic Chemistry for boards, JEE, and NEET preparations.",
      bio: "Expert in Physical & Organic Chemistry with extensive classroom experience. Leads chemistry preparation for JEE, NEET, and board examinations with innovative teaching methodologies."
    },
    {
      name: "Mr. Rohan Mishra",
      subject: "Biology & Botany",
      qualification: "M.Sc. (Botany), B.Ed.",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      specialization: "Plant Physiology & Ecology",
      achievements: "Senior Faculty specializing in Biology for NEET and Navodaya Entrance",
      bio: "Expert in Plant Physiology & Ecology with deep understanding of biological concepts. Leads Biology preparation for NEET and Navodaya Entrance with comprehensive coverage of syllabus."
    },
    {
      name: "Mr. Manish Tripathi",
      subject: "Mathematics",
      qualification: "M.Sc. (Mathematics)",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      specialization: "Algebra, Calculus & Quantitative Aptitude",
      achievements: "Senior Faculty heading Mathematics for SSC, IIT-JEE and CUET",
      bio: "Specialist in Algebra, Calculus & Quantitative Aptitude with proven track record. Heads Mathematics preparation for SSC, IIT-JEE and CUET with focus on problem-solving techniques."
    }
  ];

  return (
    <section id="faculty" className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-blue mb-4 font-poppins">
            Our Expert Faculty
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn from experienced educators with proven expertise in their respective fields
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {faculty.map((teacher, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-blue mb-2 font-poppins">
                  {teacher.name}
                </h3>
                <p className="text-accent font-medium mb-3">
                  {teacher.subject}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {teacher.qualification}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Experience: {teacher.experience}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    {teacher.specialization}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600">
                    {teacher.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-blue text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium">
            View All Faculty
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
