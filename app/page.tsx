import AboutSection from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import FocusOnSection from '@/components/FocusOnSection';
import Hero from '@/components/hero';
import FeaturedProject from '@/components/projects';
import Services from '@/components/services';

export default function Home() {
  return (
    <main className="bg-background mx-auto w-full max-w-7xl border-x border-white/10">
      <Hero />
      <FeaturedProject />
      <FocusOnSection />
      <AboutSection />
      <Experience />
      <Services />
      <Contact />
    </main>
  );
}
