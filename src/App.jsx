import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home';  // Importing the Home component
import Details from './pages/Details';  // Importing the Home component
// import estia from '../assets/estia.png';  // Assuming the logo is in the 'assets' folder
import './styles/global.css'; // Import the global CSS first
import './styles/header.css';
import './styles/home.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
