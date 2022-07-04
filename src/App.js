import React from "react";
import MainNavBar from "./components/MainNavBar";
import SectionHero from "./components/SectionHero";
import SectionFeatured from "./components/SectionFeatured";
import SectionHow from "./components/SectionHow";
import SectionMeals from "./components/SectionMeals";
import SectionTestimonials from "./components/SectionTestimonials";
import SectionPricing from "./components/SectionPricing";
import SectionCTA from "./components/SectionCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <main>
        <SectionHero />
        <SectionFeatured />
        <SectionHow />
        <SectionMeals />
        <SectionTestimonials />
        <SectionPricing />
        <SectionCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
