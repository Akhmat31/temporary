import { Consult } from './components/section_components/Consult';
import { Endfooter } from './components/section_components/Endfooter';
import { Hero } from './components/section_components/Hero';
import { ItemContext } from './components/section_components/ItemContext';
import { ItemSec } from './components/section_components/ItemSec';
import "./components/section_components/style/init.css"

function App() {
  return (
    <div>
      <Hero />
      <ItemContext />
      <ItemSec />
      <Consult />
      <Endfooter />
    </div>
  ); 
}
export default App;
