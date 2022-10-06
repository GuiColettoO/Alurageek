
import './App.css';
import Hero from './Componentes/Hero/Index';
import Interno from './Componentes/Interno';
import Categoria from './Componentes/Categoria';
import Console from './Componentes/Categoria-2';
import Diversos from './Componentes/Categoria-3';
import Fale from './Componentes/Fale_conosco';
import Footer from './Componentes/Footer';

function App() {
  return (
    <div className="tudo">
      <header className="topo">
        <Interno/>
        <Hero/>
      </header>
      <main>
        <Categoria/>
        <Console/>
        <Diversos/>
      </main>
      <section className="fale_conosco">
        <Fale />
      </section >
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
