import "@/styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Navbar/Navbar";
import { fontSans } from "@/config/fonts";
import clsx from "clsx";
import { Providers } from "./providers";
import Cursor from "@/components/cursor";

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
