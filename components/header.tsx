'use client'

import Nav from "./nav";

import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";

const Header = () => {
  return (
    <div className="main-nav-sub container">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
                If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
                image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap position-static local-scroll">
        <a className="logo" href="/#top">
          <img
            alt="ANIMARUM Logo"
            className="light-mode-logo"
            height={75}
            src="/images/demo-corporate/logo-dark.svg"
            width={300}
          />
          <img
            alt="ANIMARUM Logo"
            className="dark-mode-logo"
            height={75}
            src="/images/demo-corporate/logo-white.svg"
            width={300}
          />
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div
        className="mobile-nav"
        role="button"
        tabIndex={0}
        onClick={toggleMobileMenu}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          <Nav />
          <li className="desktop-nav-display">
            <div className="vr mt-2" />
          </li>
          <li>
            <a href="tel:+46734407342">
              <i className="mi-mobile size-24 color-primary-1 align-center" />
              +46 73 440 73 42
            </a>
          </li>
          {/* Social Links */}
          <li>
            <a className="no-hover opacity-1 pe-1" target="_blank" href="https://www.linkedin.com/company/animarumse/about/">
              <span className="mn-soc-link mn-soc-link-color" title="LinkedIn">
                <i className="fa-linkedin-in" />
              </span>
              <span className="mobile-nav-display-i">LinkedIn</span>
            </a>
            {/* <a href="#" className="no-hover opacity-1">
                <span className="mn-soc-link mn-soc-link-color" title="Youtube">
                  <i className="fa-youtube" />
                </span>
                <span className="mobile-nav-display-i">Youtube</span>
              </a> */}
          </li>
          {/* End Social Links  */}
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
};

export default Header;
