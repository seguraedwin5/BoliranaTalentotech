import Section from "../components/Section";
import Hero from "../components/Hero";
function Home() {
  return (
    <div>
      <Section>
        <h1 className="hover:text-blue-300">Home Working fine!</h1>
      </Section>
      <Section>
        <Hero></Hero>
      </Section>
    </div>
  );
}

export default Home;
