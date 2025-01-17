import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroLoginSection from "@/components/hero-login-section/HeroLoginSection";
import React from "react";

function Home() {
  return (
    <div className="Home h-[100vh]">
      <Header />
      <HeroLoginSection />
      <Footer></Footer>
    </div>
  );
}

export default Home;
