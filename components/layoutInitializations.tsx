"use client"

import "swiper/css";
import "jarallax/dist/jarallax.min.css";
import "swiper/css/effect-fade";
import "react-modal-video/css/modal-video.css";
import "photoswipe/dist/photoswipe.css";

import { parallaxMouseMovement, parallaxScroll } from "@/utlis/parallax";

import "tippy.js/dist/tippy.css";
import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";
import { useEffect } from "react";


const AppInit = () => {
    useEffect(() => {
      init_wow();
      parallaxMouseMovement();
      var mainNav = document.querySelector(".main-nav");
      if (mainNav?.classList.contains("transparent")) {
        mainNav.classList.add("js-transparent");
      } else if (!mainNav?.classList?.contains("dark")) {
        mainNav?.classList.add("js-no-transparent-white");
      }
  
      window.addEventListener("scroll", headerChangeOnScroll);
      parallaxScroll();
      return () => {
        window.removeEventListener("scroll", headerChangeOnScroll);
      };
    }, []);
  
  
    return <></>
}

export default AppInit;