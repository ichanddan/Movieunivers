import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Input,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Avatar } from "@nextui-org/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [admin, setAdmin] = useState(true);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Add Movie", href: "/addmovie" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link to="/">
        <NavbarBrand>
          <p className="font-bold text-inherit">MovieUnivers</p>
        </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Input
          type="text"
          placeholder="Sarch..."
          className="rounded-none w-96"
        />
        <button>Search</button>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {admin === true ? (
            <Link to="addmovie">Add Movie</Link>
          ) : (
            <Link href="/">Login</Link>
          )}
        </NavbarItem>
        <NavbarItem>
          {admin === true ? (
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              size="sm"
            />
          ) : (
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItem.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              to={menuItem.href}
              size="lg"
            >
              {menuItem.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
