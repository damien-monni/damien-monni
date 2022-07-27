import type { NextPage } from 'next';
import Craftman from '../components/Craftman/Craftman';
import Hero from '../components/Hero/Hero';
import Topbar from '../components/Topbar/Topbar';

const Home: NextPage = () => {
  return (
    <>
      <Topbar className="fixed top-0 right-0 left-0" />

      <div className="bg-primary-light pt-40 pb-32">
        <Hero className="pb-28 max-w-6xl mx-auto" />

        {/* We make the Craftman section slightly wider than the Hero */}
        <div className="max-w-6xl mx-auto">
          <Craftman className="-mx-20" />
        </div>
      </div>
    </>
  );
};

export default Home;
