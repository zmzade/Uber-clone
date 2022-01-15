import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Map from "./components/map";
import RideSelector from "./components/RideSelector";
import { useRouter } from "next/router";
import Link from "next/link";

const Confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = React.useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = React.useState([0, 0]);
  const [serviceCar, setServiceCar] = React.useState("UberX");
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoia2lhcmFzaG1hc291bWk5MiIsImEiOiJja3libGVxNHgwZ2ZhMnZvZnFoa2N0YnViIn0.E8AKuUYWHtG9l9AtemPEvw",
          limit: 1,
        })
    ).then((res) =>
      res.json().then((data) => setPickupCoordinates(data.features[0].center))
    );
  };
  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoia2lhcmFzaG1hc291bWk5MiIsImEiOiJja3libGVxNHgwZ2ZhMnZvZnFoa2N0YnViIn0.E8AKuUYWHtG9l9AtemPEvw",
          limit: 1,
        })
    ).then((res) =>
      res.json().then((data) => setDropoffCoordinates(data.features[0].center))
    );
  };
  React.useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  const getCar = (service) => {
    setServiceCar(service);
  };

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search" passHref>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
          onSelect={getCar}
        />
        <ConfirmButtonBox>
          <ConfirmButton>Confirm {serviceCar}</ConfirmButton>
        </ConfirmButtonBox>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex flex-col h-screen p-10
`;
const RideContainer = tw.div`
flex-1  flex flex-col h-1/2
`;

const ConfirmButtonBox = tw.div`
border-t-2
`;
const ConfirmButton = tw.div`
bg-black text-white my-4 text-center text-xl py-4
`;
const ButtonContainer = tw.div`
rounded-full absolute top-10 left-10 z-10 bg-white shadow-md
`;

const BackButton = tw.img`
h-full cursor-pointer object-contain 
`;
