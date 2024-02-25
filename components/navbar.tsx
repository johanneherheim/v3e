"use client";
import { Page } from "@/types/Page";
import Link from "next/link";
import { useState } from "react";

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

export function MobileNavigation({ pages }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="absolute right-0">
      <div className="flex flex-col items-center gap-5 text-gray-600">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden hover:underline"
        >
          Meny
        </button>
        {isOpen && (
          <div className="flex flex-col gap-5 absolute bg-background">
            <Link
              href={"/"}
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Heim
            </Link>
            {pages.map((page) => (
              <Link
                href={`/${page.slug}`}
                key={page._id}
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                {page.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
