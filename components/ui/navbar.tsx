"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-scroll";

export function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center ">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 max-w-62 mx-auto z-50 group text--blue dark:text--orange transition-all duration-300 ease-in-out",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link to="top" smooth={true} duration={500}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
              className="bg-blue"
            />
          </Link>

          <Link to="projects" smooth={true} duration={500} offset={-50}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Projects"
              className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 dark:from-orange-500 dark:to-orange-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
            ></MenuItem>
          </Link>

          <Link to="contact" smooth={true} duration={500} offset={-50}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact"
              className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 dark:from-orange-500 dark:to-orange-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
            ></MenuItem>
          </Link>
        </Menu>
      </div>
    </>
  );
}
