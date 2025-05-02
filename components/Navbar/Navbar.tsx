/* eslint-disable prettier/prettier */
'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@heroui/react';
import { usePathname } from 'next/navigation';

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
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <SvelueLogo />
          <p className="font-bold text-inherit">SVELUE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              className={`transition-colors ${
                pathname === item.href
                  ? 'text-primary font-semibold'
                  : 'text-foreground'
              }`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/contact" variant="flat">
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              href={item.href}
              className={`w-full text-lg transition-colors ${
                pathname === item.href
                  ? 'text-primary font-semibold'
                  : 'text-foreground'
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
