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

  const menuItems = ["Profile"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">MovieUnivers</p>
        </NavbarBrand>
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
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
