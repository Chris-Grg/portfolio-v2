import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import FactsSection from "./FactsSection";
import SkillsSection from "./SkillsSection";
import ResumeSection from "./ResumeSection";
import PortfolioSection from "./PortfolioSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";

function Home() {
  return (
    <>
      <div>
        <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
        <HeroSection />
        <main id="main">
          {/* <!-- ======= About Section ======= --> */}
          <AboutSection />
          {/* <!-- ======= Facts Section ======= --> */}
          <FactsSection />
          {/* <!-- End Facts Section --> */}
          {/* <!-- ======= Skills Section ======= --> */}
          <SkillsSection />
          {/* <!-- End Skills Section --> */}
          {/* <!-- ======= Resume Section ======= --> */}
          <ResumeSection />
          {/* <!-- End Resume Section --> */}
          {/* <!-- ======= Portfolio Section ======= --> */}
          <PortfolioSection />
          {/* <!-- End Portfolio Section --> */}
          {/* <!-- ======= Services Section ======= --> */}
          <ServicesSection />
          {/* <!-- End Services Section --> */}
          {/* <!-- ======= Testimonials Section ======= --> */}
          <TestimonialsSection /> {/* <!-- End Testimonials Section --> */}
          {/* <!-- ======= Contact Section ======= --> */}
          <ContactSection />
          {/* <!-- End Contact Section --> */}
        </main>
        {/* <!-- End #main --> */}

        {/* <!-- ======= Footer ======= --> */}
        <FooterSection />
        {/* <!-- End Footer --> */}

        {/* <div id="preloader"></div> */}
      </div>
    </>
  );
}

export default Home;
