import React from "react";
import { auth } from "../../auth";
import { redirect } from "next/navigation";

type Props = {};

const Home = async (props: Props) => {
  const user = await auth();
  if (!user) {
    redirect("/login");
  }
  return <div>Home</div>;
};

export default Home;
