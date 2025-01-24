import { useState } from "react";
import Businesses from "../components/Businesses.jsx";
import Card from '../components/Card.jsx';
import { useBusinessData } from "../hooks/useBusinessData.jsx";
import FilterModal from "../components/FilterModal.jsx";
import SearchBox from "../components/SearchBox.jsx";
import PopularCategories from "../components/PopularCategories.jsx";
import MapContainer from "../components/MapContainer.jsx";


function Home({ businessData }) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

  const toggleFilterModal = () => {
    setIsFilterModalOpen((prev) => !prev)
  }

  return (
    <div>
      <SearchBox onClick={toggleFilterModal} />
      <div className="center-container">
        <div className="sort-by-container">
          <label htmlFor="sort-by">Sort By:</label>
          <select id="sort-by" name="sort-by">
            <option value="top-reviews">Top Reviews</option>
            <option value="price-ascending">Price Ascending</option>
            <option value="price-descending">Price Descending</option>
            <option value="az">A-Z</option>
          </select>
        </div>
      </div>
      <PopularCategories />
      <div className="content-container">
        <Businesses businesses={businessData} />
        <MapContainer />
      </div>
      <Card businesses={businessData} />  Pass the fetched businesses data to Card
      {isFilterModalOpen && (
        <FilterModal
          onClose={toggleFilterModal}
          onApply={() => alert("Filter applied!")}
        />
      )}
    </div>
  );
}

export default Home;
