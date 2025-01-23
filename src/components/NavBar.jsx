import { Link } from 'react-router-dom'
import estia from '../assets/estia.png'

function NavBar() {
  return (
    <nav >
      <ul>
        <li>
          <Link to="/">
            <img src={estia} alt="Logo" style={{ width: '80px', height: '80px' }} />
          </Link>
          </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/details">Details</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
