import AboutSection from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Hero from '@/components/hero';
import FeaturedProject from '@/components/projects';
import Services from '@/components/services';
import Test from '@/components/test';

export default function Home() {
  return (
    <main className="bg-background mx-auto w-full max-w-7xl border-x border-white/10">
      <Hero />
      <Test />
      <FeaturedProject />
      <AboutSection />
      <Experience />
      <Services />
      <Contact />
    </main>
  );
}
