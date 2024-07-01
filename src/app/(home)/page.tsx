import React from "react";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import BikeCards from "@/components/global/BikeCards";

type Props = {};

const Home = async (props: Props) => {
  const user = await currentUser();
  if (!user) return redirect("/sign-up");
  return (
    <div>
      <div className="max-w-7xl mx-auto py-16 pb-4 px-4 sm:py-12 sm:pb-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">
          Welcome {user?.firstName || user?.emailAddresses[0].emailAddress}!
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          You are currently logged in as an admin!
        </p>
      </div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Available Two wheelers</h2>
        <p className="text-lg mb-12 text-gray-500">Manage your bikes here</p>
        <BikeCards />
      </div>
    </div>
  );
};

export default Home;
