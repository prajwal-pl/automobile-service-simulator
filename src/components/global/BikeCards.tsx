import React from "react";
import BikeCard from "./BikeCard";
import prisma from "@/lib/db";

type Props = {};

const BikeCards = async (props: Props) => {
  const bike = await prisma.bike.findMany();
  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {bike.map((bike) => (
        <BikeCard key={bike.id} bike={bike} />
      ))}
    </div>
  );
};

export default BikeCards;
