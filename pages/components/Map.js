import React from "react";
import mapboxgl from "mapbox-gl";
import tw from "tailwind-styled-components";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2lhcmFzaG1hc291bWk5MiIsImEiOiJja3libGVxNHgwZ2ZhMnZvZnFoa2N0YnViIn0.E8AKuUYWHtG9l9AtemPEvw";

const Map = ({ pickupCoordinates, dropoffCoordinates }) => {
  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      // style: "mapbox://styles/drakosi/ckvcwq3rwdw431403",
      center: [13, 56],
      zoom: 4,
    });
    if (pickupCoordinates) addtoMap(map, pickupCoordinates);
    if (dropoffCoordinates) addtoMap(map, dropoffCoordinates);

    if (pickupCoordinates && dropoffCoordinates)
      map.fitBounds([pickupCoordinates, dropoffCoordinates], {
        padding: 60,
      });
  }, [pickupCoordinates, dropoffCoordinates]);

  const addtoMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;
const Wrapper = tw.div`
 flex-1 h-1/2
`;
