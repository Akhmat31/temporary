import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import "./components/section_components/style/product.css";
import "./components/section_components/style/section-cards.css";
import "./components/section_components/style/init.css";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
