import { getPages } from "@/sanity/sanity-utils";
import SiteHeader from "./site-header";

export default async function Header() {
  const pages = await getPages();
  return <SiteHeader pages={pages} />;
}
