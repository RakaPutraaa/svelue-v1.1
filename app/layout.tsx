import "@/styles/globals.css";
import clsx from "clsx";

import { Providers } from "./providers";

import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Navbar/Navbar";
import { fontSans } from "@/config/fonts";
import Cursor from "@/components/cursor";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Svelue",
              url: "https://svelue.com",
              logo: "https://svelue.com/images/SVELUE.png", // Ganti sesuai logo kamu
              sameAs: ["https://instagram.com/svelue"],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-851-4103-4756",
                contactType: "customer service",
                areaServed: "ID",
                availableLanguage: ["Indonesian", "English"],
              },
            }),
          }}
          type="application/ld+json"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <SmoothScroll />
          <div className="relative flex flex-col min-h-screen">
            <Nav />
            <Cursor />
            {/* Jangan bungkus children di <main> di sini kalau kamu pakai <main> di dalam setiap page */}
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
