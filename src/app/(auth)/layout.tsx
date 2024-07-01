import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      {children}
    </div>
  );
};

export default AuthLayout;
