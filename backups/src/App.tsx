import { Article } from './components/section_components/Article';
import { Consult } from './components/section_components/Consult';
import { Cpages } from './components/section_components/Cpages';
import { Endfooter } from './components/section_components/Endfooter';
import { Hero } from './components/section_components/Hero';
import { Proccess } from './components/section_components/Proccess';
import { Product } from './components/section_components/Product';
import { PUIThumbs } from './components/section_components/PUIThumbs';
import { Testimonials } from './components/section_components/Testimonials';

function App() {
  return (
    <div>
      <Hero />
      <Cpages />
      <PUIThumbs />
      <Product />
      <Consult />
      <Proccess />
      <Testimonials />
      <Article />
      <Endfooter />
    </div>
  );
}
export default App;
