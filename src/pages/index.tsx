import type { NextPage } from 'next';
import Agile from '../components/Agile/Agile';
import Contact from '../components/Contact/Contact';
import Experiences from '../components/Experience/Experiences';
import Footer from '../components/Footer/Footer';
import HeroAndCraftman from '../components/HeroAndCraftman/HeroAndCraftman';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/Services';
import Topbar from '../components/Topbar/Topbar';

const Home: NextPage = () => {
  return (
    <>
      <Topbar className="fixed top-0 right-0 left-0 z-50" />

      <HeroAndCraftman className="bg-primary-light pt-36 px-4 pb-16 mb-16 lg:mb-28 lg:pt-40 lg:pb-32" />

      <Services className="max-w-6xl mx-auto mb-16 lg:mb-40" />

      <Agile className="max-w-6xl mx-auto mb-16 lg:mb-40" />

      <Experiences className="max-w-6xl mx-auto mb-40" />

      <Projects className="max-w-6xl mx-auto mb-40" />

      <Contact className="max-w-6xl mx-auto mb-40" />

      <Footer />
    </>
  );
};

export default Home;
