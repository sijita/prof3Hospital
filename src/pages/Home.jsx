import React from "react";
import Footer from "../components/subcomponents/Footer";
import Header from "../components/subcomponents/Header";
import HomeSection from "../components/subcomponents/HomeSection";

export default function Home() {
  return (
    <div className="bg-base-200">
      <Header />
      <div className="flex flex-col container mx-auto p-5 py-20 lg:p-20 justify-center items-center">
        <HomeSection />
      </div>
      <Footer />
    </div>
  );
}
