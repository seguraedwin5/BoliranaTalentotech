import Section from "../components/Section";
import Hero from "../components/Hero";
import SectionCards from "../components/SectionCards";
import ContactSection from "../components/ContactSection";
function Home() {
  return (
    <div>
      <Hero></Hero>
      <hr></hr>
      <SectionCards></SectionCards>
      <hr></hr>
      <ContactSection></ContactSection>
    </div>
  );
}

export default Home;
