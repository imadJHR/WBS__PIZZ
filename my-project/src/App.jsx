import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import TopRated from "./Sections/TopRated";
import Footer from "./Sections/Footer";
import Faq from "./Sections/Faq";
import Contact from "./Sections/Contact";
import BestSellers from "./Sections/BestSellers";
import About from "./Sections/About";
import { DarkModeProvider } from "./DarkModeContext";

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <TopRated />
        <BestSellers />
        <Faq />
        
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
};

export default App;
