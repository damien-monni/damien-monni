import type { NextPage } from 'next';
import Head from 'next/head';
import Agile from '../components/Agile/Agile';
import Contact from '../components/Contact/Contact';
import Experiences from '../components/Experience/Experiences';
import Footer from '../components/Footer/Footer';
import HeroAndCraftman from '../components/HeroAndCraftman/HeroAndCraftman';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/Services';
import Topbar from '../components/Topbar/Topbar';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('HomePage.title')}</title>
        <meta
          name="description"
          content="Développeur indépendant, full-stack, spécialisé dans l'écosystème Javascript et le cloud AWS. Je créé du code de qualité, lisible, testé et facile à faire évoluer."
        />
      </Head>

      <Topbar className="fixed top-0 right-0 left-0 z-50" />

      <HeroAndCraftman className="bg-primary-light pt-44 px-4 pb-16 mb-16 sm:pt-36 lg:mb-28 lg:pt-40 lg:pb-32" />

      <Services className="max-w-6xl mx-4 md:mx-8 lg:mx-auto mb-16 lg:mb-40" />

      <Agile className="max-w-6xl mx-auto mb-16 lg:mb-40" />

      <Experiences className="max-w-6xl mx-4 md:mx-8 lg:mx-auto mb-16 lg:mb-40" />

      <Projects className="max-w-6xl mx-4 md:mx-8 lg:mx-auto mb-16 lg:mb-40" />

      <Contact className="max-w-6xl mx-4 md:mx-8 lg:mx-auto mb-16 lg:mb-40" />

      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home;
