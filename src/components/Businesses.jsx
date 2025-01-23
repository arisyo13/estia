import { useEffect, useState } from 'react';
import { fetchBusinesses } from '../api/businesses'; // Adjust the path to match your folder structure

const Businesses = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBusinesses = async () => {
      const data = await fetchBusinesses();
      setBusinesses(data);
      setLoading(false);
    };
    getBusinesses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Businesses</h2>
      <ul>
        {businesses.map((business) => (
          <li key={business.id}>{business.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Businesses;
