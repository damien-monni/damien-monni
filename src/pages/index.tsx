import type { NextPage } from 'next';
import Topbar from '../components/Topbar/Topbar';

const Home: NextPage = () => {
  return (
    <>
      <Topbar className="fixed top-0 right-0 left-0" />
    </>
  );
};

export default Home;
