"use client";
import { useState } from "react";
import Link from "next/link";
import { HamburgerMenuIcon, HomeIcon } from "@radix-ui/react-icons";

import { Page } from "@/types/Page";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

interface NavigationProps {
  pages: Page[];
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
export default function NavBar({ pages }: NavigationProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };
  return (
    <>
      <div className="flex border-b sticky top-0 p-2 md:px-5 bg-background z-50 h-16">
        <div className="flex justify-between w-full">
          <Link href="/" className="my-auto mx-3">
            <h1 className="hidden lg:block text-2xl font-medium tracking-wider">
              VOSS 3-ETAPPARS (V3E)
            </h1>
            <h1 className="block lg:hidden text-2xl">V3E</h1>
          </Link>
          <div className="p-2 my-auto hidden gap-4 sm:flex">
            <DesktopNavigation pages={pages} />
          </div>
        </div>
        <div className="sm:hidden block">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger onClick={() => setIsSheetOpen(true)}>
              <div className="border rounded-sm p-2 m-1">
                <HamburgerMenuIcon className=" scale-125" />
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <div className="flex flex-col gap-10 mt-20">
                    {pages.map((page) => (
                      <Link
                        href={`/${page.slug}`}
                        key={page._id}
                        onClick={handleLinkClick}
                        className="hover:underline text-2xl"
                      >
                        {page.title}
                      </Link>
                    ))}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
