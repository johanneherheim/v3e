import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { Footer } from "@/types/Footer";

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
    }`,
    { options: { cache: "no-store" } }
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "images": images[]{
          asset->{
            _id,
            url
          },
          alt
        },
        pdf,
        content,
    }`,
    { slug },
    { cache: "no-store" }
  );
}

export async function getFooters(): Promise<Footer[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "footer"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
    }`,
    { options: { cache: "no-store" } }
  );
}

export async function getFooter(slug: string): Promise<Footer> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "footer" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
    }`,
    { slug },
    { cache: "no-store" }
  );
}
