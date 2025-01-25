import { useState } from "react";
import NavTop from "../components/Navbar/NavTop";
import Logo from "../components/Navbar/Logo";
import DesktopMenu from "../components/Navbar/DesktopMenu";
import MobileMenu from "../components/Navbar/MobileMenu";
import ImageSection from "@/components/HeroSection/ImageSection";
import HeroSection from "@/components/HeroSection/ImageSection";
import Partners from "@/components/HeroSection/Partners";
import Services from "@/components/HeroSection/Services";
import AboutSection from "@/components/HeroSection/AboutSection";
import WhyChooseUs from "../components/HeroSection/WhyChooseUs";
import VideoIntroduction from "@/components/HeroSection/VedioIntruduction";
import HappyClients from "@/components/HeroSection/HappyClients";
import StepsComponent from "@/components/HeroSection/StepsComponent";
import BlogGrid from "@/components/HeroSection/BlogGrids";
import TestimonialCarousel from "@/components/HeroSection/TestomonialCrausel";
import FAQ from "@/components/HeroSection/FaQ";
import MobileAppSection from "@/components/HeroSection/MobileAppSection";
import NumbersSection from "@/components/HeroSection/NumberSection";
import Hero from "@/components/HeroSection/Hero";
import CompanyLogos from "@/components/HeroSection/CompanyLogs";
import Footer from "@/components/HeroSection/Footer";


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navigation */}
      <NavTop />

      {/* Main Navbar */}
      <header className="w-full h-[72px] bg-white shadow-md  top-[44px] z-50">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 h-full">
          <Logo />
          
          {/* Desktop Menu */}
          <DesktopMenu />

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>

         
          
        </div>

        {/* Mobile Menu */}
        <MobileMenu isMobileMenuOpen={isMobileMenuOpen} />
        <main>
            {/* Hero Section */}
      <HeroSection />
      <Partners/>
      <Services/>
      <AboutSection/>
      <WhyChooseUs/>
      <VideoIntroduction/>
      <HappyClients/>
      <StepsComponent/>
      <BlogGrid/>
      <TestimonialCarousel/>
      <FAQ/>
      <MobileAppSection/>
      <NumbersSection/>
      <Hero/>
      <CompanyLogos/>
      <Footer/>
        </main>
      </header>
    </>
  );
}
