"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LinkMenu } from "./LinkMenu";

import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { scrollToElement } from "@/utlis/scrollToElement";
import { closeMobileMenu } from "@/utlis/toggleMobileMenu";

const corporateMultipage: LinkMenu[] = [
  { href: "/", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#services", text: "Services" },
  // { href: "/corporate-portfolio", text: "Portfolio" },
  // { href: "/corporate-blog", text: "Blog" },
  { href: "#contact", text: "Contact" },
];

const Nav = ({ animateY = true }) => {
  let links = corporateMultipage;

  useEffect(() => {
    setTimeout(() => {
      scrollToElement();
    }, 1000);
    init_classic_menu_resize();
    // window.addEventListener("scroll", addScrollspy("", "", ""));
    window.addEventListener("resize", init_classic_menu_resize);

    return () => {
      // window.removeEventListener("scroll", addScrollspy);
      window.removeEventListener("resize", init_classic_menu_resize);
    };
  }, []);
  const pathname = usePathname();

  return (
    <>
      {links[0].href?.includes("/") &&
        links.map((link, index) => (
          <li key={index}>
            <Link
              className={
                pathname.split("/")[1] == link.href.split("/")[1]
                  ? "active"
                  : ""
              }
              href={link.href}
            >
              {animateY ? (
                <span className="btn-animate-y">
                  <span className="btn-animate-y-1">{link.text}</span>
                  <span aria-hidden="true" className="btn-animate-y-2">
                    {link.text}
                  </span>
                </span>
              ) : (
                link.text
              )}
            </Link>
          </li>
        ))}
      {!links[0].href?.includes("/") &&
        links.map((link, index) => (
          <li key={index} className="scrollspy-link">
            <a className="" href={link.href} onClick={() => closeMobileMenu()}>
              {animateY ? (
                <span className="btn-animate-y">
                  <span className="btn-animate-y-1">{link.text}</span>
                  <span aria-hidden="true" className="btn-animate-y-2">
                    {link.text}
                  </span>
                </span>
              ) : (
                link.text
              )}
            </a>
          </li>
        ))}
    </>
  );
};

export default Nav;
