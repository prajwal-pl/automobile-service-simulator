import { LoginForm } from "@/components/global/Login";
import React from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

type Props = {};

const LoginPage = async (props: Props) => {
  const user = await auth();
  if (user) {
    redirect("/");
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
