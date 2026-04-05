import React from 'react';
import { initScrollAnimations } from './utils/animations';
import gsap from 'gsap';
// @ts-ignore
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Article } from './components/section_components/Article';
import { Consult } from './components/section_components/Consult';
import { Cpages } from './components/section_components/Cpages';
import { Endfooter } from './components/section_components/Endfooter';
import { Hero } from './components/section_components/Hero';
import { Proccess } from './components/section_components/Proccess';
import { Product } from './components/section_components/Product';
import { PUIThumbs } from './components/section_components/PUIThumbs';
import { Testimonials } from './components/section_components/Testimonials';
// @ts-ignore
import Lenis from 'lenis';

// Register plugin outside component to ensure it's ready
gsap.registerPlugin(ScrollTrigger);

function App() {
  React.useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', () => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.update();
      }
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    initScrollAnimations();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="gsap-reveal">
        <Cpages />
      </div>
      <div className="gsap-reveal">
        <PUIThumbs />
      </div>
      <div className="gsap-stagger-cards">
        <Product />
      </div>
      <div className="gsap-reveal">
        <Consult />
      </div>
      <div className="gsap-reveal">
        <Proccess />
      </div>
      <div className="gsap-stagger-cards">
        <Testimonials />
      </div>
      <div className="gsap-stagger-cards">
        <Article />
      </div>
      <Endfooter />
    </div>
  );
}
export default App;
