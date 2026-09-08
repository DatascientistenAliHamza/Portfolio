import About from "@/components/About";
import Background from "@/components/Background";
import CTA from "@/components/CTA";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
