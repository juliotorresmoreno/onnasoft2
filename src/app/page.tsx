import ClientTypes from "@/components/ClientTypes";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkProcess from "@/components/WorkProcess";

export default async function Home() {
  const language = "en";

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} />
      <main>
        <Hero language={language} />
        <Services language={language} />
        <Mission language={language} />
        <WhyChooseUs language={language} />
        <WorkProcess language={language} />
        <TechStack language={language} />
        <Projects language={language} />
        <ClientTypes language={language} />
        <Testimonials language={language} />
        <FAQ language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
