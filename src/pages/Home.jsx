import Businesses from "../components/Businesses.jsx";
import Card from '../components/Card.jsx';
import { useBusinessData } from "../hooks/useBusinessData.jsx";


function Home() {
  const { businessData, isLoading, hasError } = useBusinessData()

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Something went wrong, please try again</div>;
  }

  return (
    <div>
      <Businesses businesses={businessData} />
      <Card businesses={businessData} />  {/* Pass the fetched businesses data to Card */}
    </div>
  );
}

export default Home;
