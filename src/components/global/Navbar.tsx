"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogOut, Plus, User } from "lucide-react";
import { SignOutButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const user = useAuth();

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
                  <Link href={"/add-bike"}>
                    <div className="flex items-center gap-2">
                      <Plus /> Add Bike
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SignOutButton redirectUrl="/sign-in">
                    <div className="flex gap-2 cursor-pointer">
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
