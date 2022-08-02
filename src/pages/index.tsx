import type { NextPage } from 'next';
import Agile from '../components/Agile/Agile';
import Contact from '../components/Contact/Contact';
import Craftman from '../components/Craftman/Craftman';
import Experiences from '../components/Experience/Experiences';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/Services';
import Topbar from '../components/Topbar/Topbar';

const Home: NextPage = () => {
  return (
    <>
      <Topbar className="fixed top-0 right-0 left-0 z-50" />

      <section className="bg-primary-light pt-40 pb-32">
        <Hero className="max-w-6xl mx-auto" />

        {/* We make the Craftman section slightly wider than the Hero */}
        <div className="max-w-6xl mx-auto relative z-10 -translate-y-1">
          <Craftman className="-mx-20" />
        </div>
      </section>

      <Services className="max-w-6xl mx-auto my-28" />

      <Agile className="max-w-6xl mx-auto mb-40" />

      <Experiences className="max-w-6xl mx-auto mb-40" />

      <Projects className="max-w-6xl mx-auto mb-40" />

      <Contact className="max-w-6xl mx-auto mb-40" />
    </>
  );
};

export default Home;
