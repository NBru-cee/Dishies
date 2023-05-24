import { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const MapContainer = () => {
      const center = useMemo(() => ({ lat: 44, lng: -86 }), []);
      return (
            <GoogleMap
                  zoom={10}
                  center={center}
                  mapContainerClassName="mapContainer"
            >
                  <Marker position={center} />
            </GoogleMap>
      );
};

export default MapContainer;
