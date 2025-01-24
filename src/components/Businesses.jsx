const Businesses = ({ businesses }) => {

  return (
    <div>
      <h2>Businesses</h2>
      <ul>
        {businesses && businesses.map((business, index) => (
          <li key={business.id + business.name}>{business.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Businesses;
