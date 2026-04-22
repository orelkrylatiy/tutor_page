import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Reviews from '../components/Reviews';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import Effects from '../components/Effects';

export default function Page() {
  return (
    <>
      <Header />
      <Effects />
      <main>
        <Hero />
        <Benefits />
        <Reviews />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
