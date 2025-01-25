import {
  Avatar,
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [admin, setAdmin] = useState(false);
  let menuItems;
  const data = localStorage.getItem("userData");
  if (data) {
    menuItems = [
      { name: "Home", href: "/" },
      { name: "Add Movie", href: "/addmovie" },
      { name: "Login", href: "/login" },
    ];
  } else {
    menuItems = [
      { name: "Home", href: "/" },
      { name: "Login", href: "/login" },
    ];
  }
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    console.log(user);
    if (user && user.Roll === "Admin") {
      setAdmin(true);
    }
  }, []);
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
            <Button as={Link} color="primary" to="/login" variant="flat">
              login
            </Button>
          )}
        </NavbarItem>
        <NavbarItem>
          {admin === true ? (
            <Link to="/profile">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                size="sm"
              />
            </Link>
          ) : null}
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
