import { useState } from 'react';

import Map from '../components/Map';
import Slideshow from '../components/Slideshow';
import { useBusinessData } from '../hooks/useBusinessData';
import { useBusinessAddresses } from '../hooks/useBusinessAddresses';
import { useMemo } from 'react';


function Details() {
  const [currentIndex, setCurrentIndex] = useState(null)
  const { businessAddreses, isLoading: isBusinessAddressLoading, hasError: hasBusinessAdrressError } = useBusinessAddresses()
  const { businessData, isLoading: isBusinessLoading, hasError: hasBusinessError } = useBusinessData()

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
      console.error('Invalid address or coordinates for business:', business);
      return null;
    }
  }).filter((item) => item !== null), [businessAddreses, businessData]);

  if (isBusinessAddressLoading || isBusinessLoading) {
    return <p>Loading...</p>
  }

  if (hasBusinessAdrressError || hasBusinessError) {
    return <p>Something went wrong. please try again</p>
  }

  return (
    <>
      <div className="App">
        <Slideshow
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        {!!combinedData && <Map
          selectedLocation={currentIndex ? [combinedData[currentIndex].latitude, combinedData[currentIndex].longitude] : null}
          setCurrentIndex={setCurrentIndex}
          combinedData={combinedData}
        />}
      </div>
    </>
  );
}

export default Details;