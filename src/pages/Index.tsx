import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jason Durana Lomibao | Customer Service Professional</title>
        <meta 
          name="description" 
          content="Experienced customer service professional skilled in travel, technology, and sales support. View my portfolio and get in touch." 
        />
        <meta name="keywords" content="Jason Lomibao, Customer Service, CSR, Portfolio, Marikina" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
