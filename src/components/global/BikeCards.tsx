import React from "react";
import BikeCard from "./BikeCard";

type Props = {};

const BikeCards = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <BikeCard />
      <BikeCard />
      <BikeCard />
      <BikeCard />
    </div>
  );
};

export default BikeCards;
