import './App.css';
import './styles.scss';

import Header from './components/HeaderThingy.jsx';
import Hero from './components/Hero.jsx';
import BodySection from './components/BodySection.jsx';
import CarouselSection from './components/CarouselSection.jsx';
import QuadSection from './components/QuadSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BodySection />
      <CarouselSection />
      <QuadSection />
      <Footer />
    </div>
  );
}

export default App;