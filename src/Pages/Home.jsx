import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import MemoryGame from '../Components/MemoryGame';
import './Home.css';
import Img1 from '../assets/HomeImg1.jpg'
import Img2 from '../assets/HomeImg2.jpg'


function Home() {
  return (
    <>
    <Header/>
    <NavBar/>
    <div className="home-container">

      <p className="home-texto">
        Criar esse site foi uma forma especial de eternizar cada momento que vivemos juntos. 
        Aqui estão nossas memórias, nossos sentimentos e tudo aquilo que faz nossa história ser única. 
        Que cada página te faça sorrir, relembrar e sentir o quanto te amo. ❤️
      </p>

      <div className="home-imagens">
        <img src={Img1} alt="Momento especial 1" />
        <img src={Img2} alt="Momento especial 2" />
      </div>

      <section className="home-jogo">
        <p className="jogo-descricao">
          Clique nas cartas e tente encontrar os pares! Cada imagem representa um pedacinho do nosso amor.
        </p>
        <MemoryGame />
      </section>
    </div>
    </>
  );
}

export default Home;


