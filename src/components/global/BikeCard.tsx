"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "react-hot-toast";
import { Bike } from "@prisma/client";

type Props = {
  bike: Bike;
};

const BikeCard = ({ bike }: Props) => {
  return (
    <div>
      <Card>
        <CardHeader className="space-y-2">
          <CardTitle>{bike.name}</CardTitle>
          <Image
            className="w-full flex justify-center"
            src={bike.image}
            alt="bike"
            width={200}
            height={200}
          />
          <CardDescription>{bike.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full flex justify-between">
            <div className="space-y-2">
              <p>Owner</p>
              <p>Model</p>
              <p>Location</p>
              <p>Price</p>
            </div>
            <div className="space-y-2">
              <p>{bike.owner}</p>
              <p>{bike.model}</p>
              <p>{bike.location}</p>
              <p>{bike.price}$</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => {
              toast.success("Booked successfully!");
            }}
            className="w-full text-white bg-blue-500 hover:text-blue-500"
          >
            <span className="text-sm">Mark as Booked</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BikeCard;
