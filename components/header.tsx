import { getPages } from "@/sanity/sanity-utils";
import NavBar from "./navbar";

export default async function Header() {
  const pages = await getPages();
  return <NavBar pages={pages} />;
}
