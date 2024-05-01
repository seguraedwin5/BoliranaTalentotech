import Section from "../components/Section";
import Hero from "../components/Hero";
import SectionCards from "../components/SectionCards"
function Home() {
  return (
    <div>
      <Hero></Hero>

      <Section>
        <p>Este es un texto de seccion</p>
      </Section>
      <SectionCards/>
    </div>
  );
}

export default Home;
