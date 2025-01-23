// eslint-disable-next-line react/prop-types
function Card({ businesses }) {
  return (
    <div>
      {businesses && businesses.length ? (
        businesses.map((business) => (
          <div key={business.id}>
            <h3>{business.name}</h3>
            <p>{business.description}</p>
          </div>
        ))
      ) : (
        <p>No businesses available.</p>
      )}
    </div>
  );
}

export default Card;
