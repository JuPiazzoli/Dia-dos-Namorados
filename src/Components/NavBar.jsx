import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre-nos">Sobre Nós</Link></li>
        <li><Link to="/contagem">Contagem</Link></li>
        <li><Link to="/enigma">Enigma</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;