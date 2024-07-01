import { getPages } from "@/sanity/sanity-utils";
import NavBar from "./navbar";
import { routes } from "./routes";

export default async function Header() {
  return <NavBar routes={routes} />;
}
