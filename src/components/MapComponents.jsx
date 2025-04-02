import React, { useEffect, useState } from 'react';


const MapComponents = ({ address }) => {
  const [mapUrl, setMapUrl] = useState("");

  useEffect(() => {
    setMapUrl(`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`);
  }, [address]);

  return (
    <iframe
      title="Map"
      width="100%"
      height="200"
      src={mapUrl}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  );
};


export default MapComponents;
