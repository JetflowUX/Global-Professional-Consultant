import React from 'react';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { HowItWorks } from '../components/HowItWorks';
import { ClientPortal } from '../components/ClientPortal';
import { TrustStats } from '../components/TrustStats';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';
import { useScreenInit } from '../useScreenInit';
export function Home() {
  useScreenInit();
  return (
    <div className="min-h-screen flex flex-col w-full bg-cream font-sans">
      <AnnouncementBar />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <HowItWorks />
        <ClientPortal />
        <TrustStats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>);

}