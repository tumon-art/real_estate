import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { memo } from "react";

const Map = ({ geography }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GAPI || "",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={17}
      center={geography}
      mapContainerClassName="map-container"
    >
      <Marker position={geography} />
    </GoogleMap>
  );
};

export default memo(Map);
