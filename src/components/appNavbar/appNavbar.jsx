import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import logo from "../../../public/hope-logo.svg";

export default function AppNavbar({setCreateProfileModal, createProfileModal}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Active Incidents"); // Default active item

  const menuItems = ["Report Incident", "Active Incidents", "Profile"];

  const handleItemClick = (item) => {
    setActiveItem(item);
    if(item == "Profile"){
      console.log("hello")
      setCreateProfileModal(true);
      console.log(createProfileModal)
    }
  };

  return (
    <Navbar className="h-20" onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src={logo} className="h-16 w-16 mr-2" alt="" />
          <p className="font-bold text-xl text-inherit">Hope</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={activeItem === item}>
            <Link
              color={activeItem === item ? "primary" : "foreground"}
              href="#"
              onPress={() => handleItemClick(item)}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ConnectButton showBalance={false} label="Sign in" />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={activeItem === item ? "primary" : "foreground"}
              className="w-full"
              href="#"
              size="lg"
              onPress={() => handleItemClick(item)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
