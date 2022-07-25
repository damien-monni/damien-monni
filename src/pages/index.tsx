import type { NextPage } from 'next';
import Hero from '../components/Hero/Hero';
import Topbar from '../components/Topbar/Topbar';

const Home: NextPage = () => {
  return (
    <>
      <Topbar className="fixed top-0 right-0 left-0" />

      <div className="bg-primary-light">
        <Hero className="pt-40 pb-28 max-w-6xl mx-auto" />
      </div>
    </>
  );
};

export default Home;
