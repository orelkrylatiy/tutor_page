import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Pricing from '../components/Pricing';
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
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
