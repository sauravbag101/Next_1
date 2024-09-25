"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/app/utils/cn";
//help to reload link in Next_js
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (

        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
          <Link href="/">
            
          <link  href={"/Home"} />
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
            
          </Link>
          <MenuItem setActive={setActive} active={active} item="Our Phone">
          <div className="flex flex-col space-y-4 text-sm">

          <HoveredLink href="/courses">All courses</HoveredLink>
          <HoveredLink href="/courses">Basic music Library</HoveredLink>
          <HoveredLink href="/courses">Advanced Composition</HoveredLink>
          <HoveredLink href="/courses">Phone API</HoveredLink>
          <HoveredLink href="/courses">Music</HoveredLink>
          </div>
          </MenuItem>
          <Link  href={"/contact"} >
          <MenuItem setActive={setActive} active={active} item="Contact">
          </MenuItem>
          </Link>
          </Menu>
          </div>
  )
}

export default Navbar
