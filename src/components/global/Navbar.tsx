import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full top-0 sticky back border-b border-black backdrop-brightness-75 dark:bg-black/25 bg-black/40 backdrop-blur-lg">
      <div className="mx-auto w-full py-3 max-w-screen-xl flex justify-between items-center">
        <div>
          <Link href="/">
            <h1
              className="text-xl 
            font-bold md:p-0 pl-4"
            >
              Logo
            </h1>
          </Link>
        </div>
        <div className="flex gap-2 items-center md:p-0 pr-4">
          <Link href={"/login"}>
            <Button>Login</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
