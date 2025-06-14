import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import MemoryGame from "../Components/MemoryGame";
import "./Home.css";
import Img1 from "../assets/HomeImg1.jpg";
import Img2 from "../assets/HomeImg2.jpg";

function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="home-container">
        <p className="home-texto">
          Criar este site foi muito mais do que um simples projeto — foi uma
          forma especial de eternizar cada momento que vivemos juntos. Cada
          detalhe aqui foi pensado com carinho para refletir a intensidade da
          nossa conexão, a beleza da nossa trajetória e o amor que cresce a cada
          dia entre nós. Neste cantinho feito especialmente para você, estão
          guardadas nossas lembranças mais preciosas, nossos sentimentos mais
          sinceros e tudo aquilo que torna a nossa história única e
          inesquecível. Cada imagem, cada palavra e cada página carregam
          pedacinhos do que somos juntos: risos compartilhados, desafios
          superados, sonhos construídos lado a lado. Espero que, ao navegar por
          este site, você sinta o quanto é amado, o quanto é especial para
          mim. Que cada clique desperte um sorriso no seu rosto, traga à tona
          momentos marcantes e aqueça seu coração com tudo o que vivemos até
          aqui — e com tudo o que ainda está por vir. Porque acima de tudo, este
          site é uma prova viva do quanto te amo. 🖤
        </p>

        <div className="home-imagens">
          <img src={Img1} alt="Momento especial 1" />
          <img src={Img2} alt="Momento especial 2" />
        </div>

        <section className="home-jogo">
          <p className="jogo-descricao">
            Clique nas cartas e tente encontrar os pares! Cada imagem representa
            um pedacinho do nosso amor.
          </p>
          <MemoryGame />
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
