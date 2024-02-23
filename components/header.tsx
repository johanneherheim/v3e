import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Header() {
  const pages = await getPages();
  return (
    <div className="sticky top-0 h-16 flex items-center justify-between w-full px-5">
      <Link href="/">
        <h1 className="hidden lg:block font-medium tracking-wider">
          VOSS 3-ETAPPARS
        </h1>
        <h1 className="block lg:hidden font-medium">V3E</h1>
      </Link>
      <div className="flex items-center gap-5 text-gray-600">
        <Link href={"/"} className="hover:underline hidden lg:block">
          Heim
        </Link>
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
    </div>
  );
}
