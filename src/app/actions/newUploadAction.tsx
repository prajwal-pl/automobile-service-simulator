"use server";

import prisma from "@/lib/db";

export const newUploadAction = async ({
  name,
  description,
  price,
  owner,
  model,
  location,
  image,
}: any) => {
  const newBike = await prisma.bike.create({
    data: {
      name,
      description,
      price,
      owner,
      model,
      location,
      image,
    },
  });
  return newBike;
};
