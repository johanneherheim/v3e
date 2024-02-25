"use client";
import { useState } from "react";
import Link from "next/link";
import { Cross1Icon, HamburgerMenuIcon, HomeIcon } from "@radix-ui/react-icons";

import { Button } from "./ui/button";
import { Page } from "@/types/Page";

interface NavigationProps {
  pages: Page[];
}

interface MobileNavigationProps extends NavigationProps {
  closeMenu: () => void;
}

function DesktopNavigation({ pages }: NavigationProps) {
  return (
    <div className="flex items-center gap-8 text-gray-600">
      {pages.map((page) => (
        <Link href={`/${page.slug}`} key={page._id} className="hover:underline">
          {page.title}
        </Link>
      ))}
      <Link href={"/"} className="hover:underline">
        <HomeIcon className="scale-150" />
      </Link>
    </div>
  );
}

function MobileNavigation({ pages, closeMenu }: MobileNavigationProps) {
  const handleLinkClick = () => {
    closeMenu();
  };
  return (
    <div className="grid grid-cols-2 gap-6 p-6 mx-auto text-center">
      {pages.map((page) => (
        <Link href={`/${page.slug}`} key={page._id} className="hover:underline">
          <p onClick={handleLinkClick}>{page.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default function NavBar({ pages }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMobileMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex border-b sticky top-0 p-2 md:px-5 bg-inherit h-16">
        <div className="flex justify-between w-full">
          <Link href="/" className="my-auto mx-3">
            <h1 className="hidden lg:block text-2xl font-medium tracking-wider">
              VOSS 3-ETAPPARS
            </h1>
            <h1 className="block lg:hidden text-2xl">V3E</h1>
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
        {isOpen && (
          <MobileNavigation pages={pages} closeMenu={closeMobileMenu} />
        )}
      </div>
    </>
  );
}
