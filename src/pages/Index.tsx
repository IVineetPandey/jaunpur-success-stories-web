
import { useState, useEffect } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import NoticeMarquee from '@/components/NoticeMarquee';
import AboutSection from '@/components/AboutSection';
import CoursesSection from '@/components/CoursesSection';
import ResultsSection from '@/components/ResultsSection';
import FacultySection from '@/components/FacultySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen font-roboto">
      <TopBar />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSlider />
      <NoticeMarquee />
      <AboutSection />
      <CoursesSection />
      <ResultsSection />
      <FacultySection />
      <TestimonialsSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
