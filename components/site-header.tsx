"use client";
import { useState } from "react";
import Link from "next/link";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

import { Button } from "./ui/button";
import { Page } from "@/types/Page";

interface NavigationProps {
  pages: Page[];
}

interface MobileNavigationProps {
  pages: Page[];
}

export function DesktopNavigation({ pages }: MobileNavigationProps) {
  return (
    <div className="flex items-center gap-5 text-gray-600">
      <Link href={"/"} className="hover:underline">
        Heim
      </Link>
      {pages.map((page) => (
        <Link href={`/${page.slug}`} key={page._id} className="hover:underline">
          {page.title}
        </Link>
      ))}
    </div>
  );
}

export default function SiteHeader({ pages }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex border-b sticky p-2 top-0 bg-inherit ml-5 h-16">
        <div className="flex justify-between w-full">
          <Link href="/" className="my-auto mx-3">
            <h1 className="hidden lg:block font-medium tracking-wider">
              Voss 3-etappers
            </h1>
            <h1 className="block lg:hidden font-medium">V3E</h1>
          </Link>
          <div className="p-2 my-auto hidden gap-4 sm:flex">
            <DesktopNavigation pages={pages} />
          </div>
        </div>
        <div className="flex-grow flex justify-end items-center">
          <div className="flex sm:hidden">
            <Button
              size="icon"
              variant="outline"
              onClick={toggleMobileMenu}
              className="m-2"
            >
              {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
            </Button>
          </div>
        </div>
      </div>
      <div>
        {isOpen ? (
          <div className="grid grid-cols-2 gap-6 p-6 mx-auto text-center">
            {pages.map((page) => (
              <Link
                href={`/${page.slug}`}
                key={page._id}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
