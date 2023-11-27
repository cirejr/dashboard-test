"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { AcmeLogo } from "./acme-logo";
import { signIn, signOut } from "next-auth/react";

export default function DefaultNavbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button color="primary" onClick={()=> signIn()}  variant="flat">
            sign in
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button color="secondary" onClick={()=> signOut()}  variant="flat">
            sign out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
