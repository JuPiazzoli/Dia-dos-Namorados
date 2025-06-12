import { Routes, Route } from 'react-router-dom';
import SobreNos from './Pages/Sobre-nos';
import Home from './Pages/Home';
import Contagem from './Pages/Contagem';
import Enigma from './Pages/Enigma';


function App() {
  return (
    <>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/contagem" element={<Contagem />} /> 
          <Route path="/enigma" element={<Enigma />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
