import "@/styles/globals.css";
import { Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
// import { Navbar } from "@/components/navbar";
import Nav from "@/components/Navbar/Navbar";
import Hero from "@/components/HomePage/Hero/Hero";
import About from "@/components/HomePage/About/About";
import Service from "@/components/HomePage/Service/Service";
import Faq from "@/components/HomePage/Faq/Faq";
import Contact from "@/components/HomePage/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Nav />
            <main className="container mx-auto max-w-7xl px-6 flex-grow">
              {/* {children} */}
              <Hero />
              <About />
              <Service />
              <Faq />
              <Contact />
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
