import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { carList } from "../data/carList";

const RideSelector = ({ pickupCoordinates, dropoffCoordinates, onSelect }) => {
  const [rideDuration, setRideDuration] = React.useState(0);

  React.useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoia2lhcmFzaG1hc291bWk5MiIsImEiOiJja3libGVxNHgwZ2ZhMnZvZnFoa2N0YnViIn0.E8AKuUYWHtG9l9AtemPEvw`
    )
      .then((res) => res.json())
      .then((data) => {
        setRideDuration(data.routes[0].duration / 100);
      });
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} onClick={() => onSelect(car.service)} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>10 min away</Time>
            </CarDetails>
            <Price>{"$" + (rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`;

const Title = tw.div`
text-gray-500 text-center text-sm py-2 border-b

`;
const CarList = tw.div`
`;
const Car = tw.div`
flex p-4 items-center
`;
const CarImage = tw.img`
h-40 mr-4 cursor-pointer
`;
const CarDetails = tw.div`
flex-1
`;

const Service = tw.div`
font-medium
`;
const Time = tw.div`
text-sm text-blue-500
`;
const Price = tw.div`
texr-sm
`;
