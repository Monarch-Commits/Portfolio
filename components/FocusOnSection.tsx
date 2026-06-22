import { Plus } from 'lucide-react';
import ResponsiveDesignSection from './DevelopmentFocusSection/ResponsiveDesignSection';
import SmoothAnimationSection from './DevelopmentFocusSection/SmoothAnimationSection';
import FastPerformanceCard from './DevelopmentFocusSection/FastPerformanceCard';
import CleanScalableCode from './DevelopmentFocusSection/CleanScalableCode';

export default function FocusOnSection() {
  return (
    <section className="border-b border-white/10 bg-black px-4 py-24 sm:px-8 lg:px-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-primary text-sm font-medium">
            Development Standards
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            What I Focus On
          </h2>

          <p className="text-muted-foreground mt-6 text-lg">
            I build modern web applications that are fast, easy to use, and
            built to grow as the project expands.
          </p>
        </div>

        {/* Content Wrapper (for child cards) */}
        <div className="bg-background relative mt-5 border border-white/10 md:mt-16">
          <Plus className="absolute -top-2 -left-2 h-4 w-4 text-white" />
          <Plus className="absolute -top-2 -right-2 h-4 w-4 text-white" />
          <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
          <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
          <ResponsiveDesignSection />
          <SmoothAnimationSection />
          <FastPerformanceCard />
          <CleanScalableCode />
        </div>
      </div>
    </section>
  );
}
