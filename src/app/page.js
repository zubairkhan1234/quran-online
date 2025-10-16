import Navigation from "@/components/sections/Navigation";
import Courses from "@/components/sections/Courses";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ClassActivity from "@/components/sections/ClassActivity";
import Header from "@/components/sections/Header";

import "./globals.css";
import LearningSection from "@/components/sections/LearningSection";
import SuccessSection from "@/components/sections/SuccessSection";
import Footer from "@/components/sections/Footer";
export default function Home() {
  return (
    <div className="font-roboto">
      <Navigation />
      <section className="header-dark">
        <Header />
      </section>
      <div className="container m-auto">
        <Courses />
      </div>
      {/* <div>
        <LearningSection />
      </div> */}
      {/* <div>
        <SuccessSection />
      </div> */}
      {/* <div className="container m-auto">
        <ClassActivity />
      </div> */}
      {/* <div className="header-dark">
        <Footer />
      </div> */}
    </div>
  );
}
