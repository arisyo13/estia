import { useMemo } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home';  // Importing the Home component
import Details from './pages/Details';  // Importing the Home component

import './styles/header.css';
import './styles/home.css';
import './styles/modal.css';
import './styles/filter.css';
import './styles/button.css';
import './styles/header.css';
import './styles/list-map.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useBusinessAddresses } from './hooks/useBusinessAddresses';
import { useBusinessData } from './hooks/useBusinessData';

function Layout() {
  return (
    <div className="top-root">
      <div className="container">
        <NavBar />
      </div>
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}


function App() {
  const { businessAddreses, isLoading: isBusinessAddressLoading, hasError: hasBusinessAdrressError } = useBusinessAddresses();
  const { businessData, isLoading: isBusinessLoading, hasError: hasBusinessError } = useBusinessData();
  
  const combinedData = useMemo(() => businessData && businessData.map((business) => {
    const address = businessAddreses && businessAddreses.find(
      (addr) => addr.id === business.id_address
    );

    if (address && address.latitude && address.longitude) {
      return {
        ...business,
        ...address,
      };
    } else {
      return;
    }
  }).filter((item) => item !== null), [businessAddreses, businessData]);

  if (isBusinessAddressLoading || isBusinessLoading) {
    return <p>Loading...</p>
  }

  if (hasBusinessAdrressError || hasBusinessError) {
    return <p>Something went wrong. please try again</p>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home businessData={combinedData} />} />
          <Route path="new" element={<Details combinedData={combinedData} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
