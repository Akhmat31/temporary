import { DuoCard } from './components/section_components/DuoCard';
import { Endfooter } from './components/section_components/Endfooter';
import { FinalContext } from './components/section_components/FinalContext';
import { Hero } from './components/section_components/Hero';
import { Items } from './components/section_components/Items';
import { Lab } from './components/section_components/Lab';

function App() {
  return (
    <div>
      <Hero />
      <DuoCard />
      <Items />
      <Lab />
      <FinalContext />
      <Endfooter />
    </div>
  );
}
export default App;
