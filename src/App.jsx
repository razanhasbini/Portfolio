import Portfolio from './components/Portfolio';
import EffectsLab from './components/EffectsLab';
import AboutPreview from './components/AboutPreview';

function App() {
  if (window.location.pathname === '/effects') {
    return <EffectsLab />;
  }

  if (window.location.pathname === '/about-preview') {
    return <AboutPreview />;
  }

  return <Portfolio />;
}

export default App;
