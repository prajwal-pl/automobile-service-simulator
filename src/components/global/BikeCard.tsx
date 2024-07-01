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

type Props = {};

const BikeCard = (props: Props) => {
  return (
    <div>
      <Card>
        <CardHeader className="space-y-2">
          <CardTitle>Bike Card</CardTitle>
          <Image
            className="w-full flex justify-center"
            src="/demo.jpg"
            alt="bike"
            width={200}
            height={200}
          />
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, id.
          </CardDescription>
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
              <p>John Doe</p>
              <p>Bike Model</p>
              <p>Somewhere</p>
              <p>100$</p>
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
