
import { BookOpen, Target, Trophy, Users, GraduationCap, School } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Foundation (Class 6-8)",
      description: "Strong foundation building for middle school students with focus on conceptual clarity",
      icon: <School className="w-8 h-8" />,
      features: ["Concept Building", "Interactive Learning", "Regular Tests", "Homework Support"],
      duration: "Academic Year",
      batch: "Admission Open"
    },
    {
      id: 2,
      title: "Foundation (Class 9-10)",
      description: "Comprehensive preparation for board exams with competitive exam foundation",
      icon: <BookOpen className="w-8 h-8" />,
      features: ["Board Preparation", "Competitive Foundation", "Practical Labs", "Career Guidance"],
      duration: "Academic Year",
      batch: "New batch starts in April"
    },
    {
      id: 3,
      title: "Foundation (Class 11-12)",
      description: "Advanced preparation for boards and competitive exams like JEE, NEET",
      icon: <GraduationCap className="w-8 h-8" />,
      features: ["Board Excellence", "JEE/NEET Foundation", "Regular Mock Tests", "Doubt Sessions"],
      duration: "Academic Year",
      batch: "Admission Open"
    },
    {
      id: 4,
      title: "SSC Preparation",
      description: "Comprehensive coaching for SSC CGL, CHSL, MTS and other SSC examinations",
      icon: <Target className="w-8 h-8" />,
      features: ["Expert Faculty", "Mock Tests", "Study Material", "Doubt Sessions"],
      duration: "12 Months",
      batch: "New batch starts every month"
    },
    {
      id: 5,
      title: "JEE Foundation & Main",
      description: "Complete preparation for JEE Main and Advanced with foundation courses",
      icon: <BookOpen className="w-8 h-8" />,
      features: ["IIT Alumni Faculty", "Regular Assessments", "All India Rank Tests", "Crash Courses"],
      duration: "2 Years / 1 Year",
      batch: "Starts in April & July"
    },
    {
      id: 6,
      title: "NEET Preparation",
      description: "Medical entrance coaching with focus on NEET and state medical exams",
      icon: <Trophy className="w-8 h-8" />,
      features: ["Medical Experts", "Clinical Exposure", "Previous Years Papers", "Biology Lab"],
      duration: "2 Years / 1 Year",
      batch: "Admission Open"
    },
    {
      id: 7,
      title: "CUET & BHU Entrance",
      description: "Specialized coaching for CUET and BHU entrance examinations",
      icon: <Users className="w-8 h-8" />,
      features: ["University Specific Prep", "Subject Experts", "Online Tests", "Counseling"],
      duration: "6-12 Months",
      batch: "Multiple batches available"
    },
    {
      id: 8,
      title: "Teaching Exams",
      description: "CTET, TET, S-TET preparation for aspiring teachers",
      icon: <BookOpen className="w-8 h-8" />,
      features: ["Pedagogy Focus", "Teaching Methods", "Child Psychology", "Practice Tests"],
      duration: "6 Months",
      batch: "Starts before exam announcement"
    },
    {
      id: 9,
      title: "UPPCS Preparation",
      description: "State civil services preparation with current affairs and GS",
      icon: <Target className="w-8 h-8" />,
      features: ["Current Affairs", "Answer Writing", "Interview Prep", "Test Series"],
      duration: "18 Months",
      batch: "Foundation batch available"
    }
  ];

  return (
    <section id="courses" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 font-poppins">
            Our Courses
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            Comprehensive coaching programs designed to help you excel in competitive examinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 md:p-6 border border-gray-100">
              <div className="text-brand-blue mb-4">
                {course.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-brand-blue mb-3 font-poppins">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                {course.description}
              </p>
              
              <div className="mb-4">
                <div className="text-xs md:text-sm text-gray-500 mb-2">Duration: {course.duration}</div>
                <div className="text-xs md:text-sm text-accent font-medium">{course.batch}</div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-brand-blue mb-2 text-sm md:text-base">Key Features:</h4>
                <ul className="space-y-1">
                  {course.features.map((feature, index) => (
                    <li key={index} className="text-xs md:text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-brand-blue text-white py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium text-sm md:text-base">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
