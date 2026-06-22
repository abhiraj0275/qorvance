import Hero from '@/components/home/Hero';
import ServiceCards from '@/components/home/ServiceCards';
import Stats from '@/components/home/Stats';
import PortfolioShowcase from '@/components/home/PortfolioShowcase';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';
import FAQ from '@/components/home/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <Stats />
      <PortfolioShowcase />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
