import { Link } from 'react-router-dom'
import estia from '../assets/estia.png'

function NavBar() {
  return (
    <nav style={{ width: '100%', position: 'relative', display: 'flex', alignItems: 'center', fontSize: 24, height: 90 }}>
      <Link style={{ position: 'absolute', top: 0, left: 0 }} to="/">
        <img src={estia} alt="Logo" style={{ width: '80px', height: '80px' }} />
      </Link>
      <ul style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 18,
        listStyleType: 'none'
        }}
      >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new">Details</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
