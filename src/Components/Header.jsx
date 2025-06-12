import './Header.css';
import Imagem from '../assets/Logo (Namorados).png'

function Header() {
  return (
    <header className="header-container">
      <h1 className="header-title">FELIZ DIA DOS NAMORADOS</h1>
      <img
        className="header-logo"
        src={Imagem} 
        alt="Logo do casal"
      />
    </header>
  );
}

export default Header;