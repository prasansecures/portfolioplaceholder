import Header from './components/Header';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import EventsSection from './components/EventsSection';
import WhatIDoSection from './components/WhatIDoSection';
import ContactSection from './components/ContactSection';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <EventsSection />
        <WhatIDoSection />
      </main>
      <ContactSection />
    </>
  );
}
