import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import PracticalExperience from "@/components/sections/PracticalExperience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <Experience />
      <PracticalExperience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
