import React from "react";

function FilterModal({ onClose, onApply }) {
  const handleMouseOver = (index) => {
    const stars = Array.from({ length: 5 }).map((_, i) =>
      i < index ? "⭐" : "✰"
    );
    document.getElementById("rating_bar").innerHTML = stars.join(" ");
  };

  React.useEffect(() => {
    const content = Array.from({ length: 5 })
      .map((_, i) => `<span id="rate_${i + 1}" className="star">✰</span>`)
      .join(" ");
    document.getElementById("rating_bar").innerHTML = content;

    // Adding event listeners for mouse hover over the stars
    Array.from(document.getElementById("rating_bar").getElementsByClassName("star")).forEach((span, i) => {
      span.onmouseover = () => handleMouseOver(i + 1);
      span.onmouseout = () => handleMouseOver(0); // Reset to default stars when mouse leaves
    });
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close">&times;</span>
        <h4>Filter Options</h4>
        
        {/* Rating Stars */}
        <div id="rating_bar"></div>
        
        <hr />
        
        {/* Postal Code Filter */}
        <label htmlFor="postal_code">Postal Code:</label>
        <select id="postal_code" name="postal_code">
          <option value="1000">1000</option>
          <option value="1030">1030</option>
          <option value="1050">1050</option>
          <option value="1090">1090</option>
        </select>
        
        <hr />
        
        {/* Apply Button */}
        <button onClick={onApply}>Apply</button>
      </div>
    </div>
  );
}

export default FilterModal;
