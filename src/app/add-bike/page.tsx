"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadButton } from "@uploadthing/react";
import React, { useState } from "react";
import { OurFileRouter } from "../api/uploadthing/core";
import { Button } from "@/components/ui/button";
import { newUploadAction } from "../actions/newUploadAction";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
type Props = {};

const AddBike = (props: Props) => {
  const user = useUser();
  const router = useRouter();
  const [input, setInput] = useState<any>({
    name: "",
    description: "",
    price: "",
    owner: "",
    model: "",
    location: "",
    image: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newUploadAction(input)
      .then((res) => {
        toast.success("Bike added successfully!");
        router.push("/");
      })
      .catch((err) => {
        toast.error("Error adding bike");
      });
  };
  if (!user.isSignedIn) {
    return (
      <div className="h-screen flex flex-col gap-3 items-center justify-center">
        <p className="text-4xl font-bold">
          Oops! {"You've"} not signed in yet.
        </p>
        <p className="text-xl font-medium">Please sign in to continue.</p>
      </div>
    );
  }
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">
          Add a New Bike
        </h1>
        <p className="text-lg font-medium text-muted-foreground">
          Add a new bike to your collection
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="name"
            className="block text-sm font-medium text-muted-foreground"
          >
            Name
          </Label>
          <Input
            value={input.name}
            onChange={(e) => {
              setInput({
                ...input,
                name: e.target.value,
              });
            }}
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="description"
            className="block text-sm font-medium text-muted-foreground"
          >
            Description
          </Label>
          <Input
            value={input.description}
            onChange={(e) => {
              setInput({
                ...input,
                description: e.target.value,
              });
            }}
            type="text"
            id="description"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="price"
            className="block text-sm font-medium text-muted-foreground"
          >
            Price
          </Label>
          <Input
            value={input.price}
            onChange={(e) => {
              setInput({
                ...input,
                price: e.target.value,
              });
            }}
            type="text"
            id="price"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="owner"
            className="block text-sm font-medium text-muted-foreground"
          >
            Owner
          </Label>
          <Input
            value={input.owner}
            onChange={(e) => {
              setInput({
                ...input,
                owner: e.target.value,
              });
            }}
            type="text"
            id="owner"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="model"
            className="block text-sm font-medium text-muted-foreground"
          >
            Model
          </Label>
          <Input
            value={input.model}
            onChange={(e) => {
              setInput({
                ...input,
                model: e.target.value,
              });
            }}
            type="text"
            id="model"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex gap-2  items-center">
          <div className="flex flex-col gap-2 w-full">
            <Label
              htmlFor="location"
              className="block text-sm font-medium text-muted-foreground"
            >
              Location
            </Label>
            <Input
              value={input.location}
              onChange={(e) => {
                setInput({
                  ...input,
                  location: e.target.value,
                });
              }}
              type="text"
              id="location"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <p className="text-sm mb-3 text-center font-medium text-muted-foreground">
              Upload an image of your bike!
            </p>
            <UploadButton<OurFileRouter, any>
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response.
                setInput({
                  ...input,
                  image: res[0].url,
                });

                console.log("Files: ", res);
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
        </div>
        <Button type="submit" className="w-full bg-blue-500">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddBike;
