"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";
// import { auth, signOut } from "../../../auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogOut } from "lucide-react";
// import { SignOut } from "@/app/actions/auth.action";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton, useAuth } from "@clerk/nextjs";

type Props = {};

const Navbar = (props: Props) => {
  // const session = useSession();
  const router = useRouter();
  const user = useAuth();
  if (!user.isSignedIn) {
    router.push("/sign-in");
  }
  return (
    <div className="w-full top-0 sticky back border-b border-black backdrop-brightness-75 dark:bg-black/10 dark:border-white bg-black/40 backdrop-blur-lg">
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
          {user.isSignedIn && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <SignOutButton>
                    <div className="flex gap-2">
                      <LogOut /> Sign out
                    </div>
                  </SignOutButton>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {!user.isSignedIn && (
            <Link href={"/sign-up"}>
              <Button>Login</Button>
            </Link>
          )}

          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
