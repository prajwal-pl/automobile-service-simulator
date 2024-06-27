import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full back backdrop-brightness-75 bg-black/25 backdrop-blur-lg">
      <div className="mx-auto top-0 sticky py-3 max-w-xl flex justify-between items-center">
        <div>
          <Link href="/">
            <h1
              className="text-xl 
            font-bold"
            >
              Logo
            </h1>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Button>Login</Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
