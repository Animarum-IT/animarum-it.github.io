import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import {
  ArrowRightIcon,
  SearchIcon,
} from "@/components/icons";
import { Button } from "@nextui-org/button";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" isBordered={true} shouldHideOnScroll={false} position="sticky" className="backdrop-saturate-50 backdrop-blur-sm bg-[length:4px_4px] navbar-background-color" >
      <NavbarBrand>

        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="shadow" size="md">
            Connect
          </Button>

        </NavbarItem>


      </NavbarContent>
    </NextUINavbar>
  );
};
