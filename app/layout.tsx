import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voss 3-etappars",
  description:
    "🚴 Nettsida for sykkelrittet Voss 3-etappars, laga med NextJS og Sanity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <meta
          name="viewport"
          content="width = device-width, initial-scale = 1.0, minimum-scale = 1, maximum-scale = 1, user-scalable = no"
          className="bg-muted"
        /> */}
        <meta name="apple-mobile-web-app-title" content="Voss 3-etappars" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚴</text></svg>"
        />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#325758" />
        <link rel="apple-touch-icon" href="/img/icon.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/img/icon.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/img/icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/img/icon.png" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
