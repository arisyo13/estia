// src/components/Searchbox.jsx

import React from "react";

function Searchbox({ onClick }) {
  return (
    <section>
      <input type="text" placeholder="Search" style={{ padding: '10px', marginRight: '10px', width: '300px' }} />
      <button onClick={onClick} style={{ padding: '10px' }}>Filters</button>
      <button style={{ padding: '10px', marginLeft: '10px' }}>Sort By</button>
    </section>
  );
}

export default Searchbox;
