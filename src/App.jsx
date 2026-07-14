import ScrollProgressBar from './components/ScrollProgressBar';
import FloatingBlobs from './components/FloatingBlobs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="relative min-h-screen bg-darkBg text-lightText font-sans overflow-x-hidden">
      {/* Scroll Progress Bar Indicator */}
      <ScrollProgressBar />

      {/* Floating Blobs Ambient Background Animation */}
      <FloatingBlobs />

      {/* Global Navbar */}
      <Navbar />

      {/* Landing Section */}
      <Hero />

      {/* Main Sections */}
      <main>
        {/* About Section */}
        <About />

        {/* Technical Skills Category Matrix */}
        <Skills />

        {/* Showcase Projects Grid */}
        <Projects />

        {/* Chronological Timeline Road Map */}
        <Timeline />

        {/* Coding Profiles Platform Redirects */}
        <CodingProfiles />

        {/* Scholarship & Honors Achievements */}
        <Achievements />

        {/* Certificate Accreditations */}
        <Certificates />

        {/* Contact Form Details */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Back to Top Quick Navigation Shortcut */}
      <BackToTop />
    </div>
  );
}
