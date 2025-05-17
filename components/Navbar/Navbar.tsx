/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import YellowGlassButton from "../Ui/YellowGlassButton";

export const SvelueLogo = () => {
  return (
    <img
      src="/images/SVELUE.png"
      alt="Svelue Logo"
      width={36}
      height={36}
      className="object-contain"
    />
  );
};

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "services", label: "Services", href: "/services" },
  ];

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      position="sticky"
      isBordered
      className="top-0 z-50 bg-background"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <SvelueLogo />
          <p className="font-bold text-inherit">SVELUE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.id}>
            <Link
              href={item.href}
              className={`transition-colors ${
                pathname === item.href
                  ? "text-[#F8A01B] font-semibold"
                  : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <YellowGlassButton as={Link} href="/contact" variant="flat">
            Contact Us
          </YellowGlassButton>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.id}>
            <Link
              href={item.href}
              className={`w-full text-lg transition-colors ${
                pathname === item.href
                  ? "text-[#F8A01B] font-semibold"
                  : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
