'use client'

import { useEffect, useState } from "react";

import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";
import { init_wow } from "@/utlis/initWowjs";
import { parallaxMouseMovement, parallaxScroll } from "@/utlis/parallax";

export default function useClientInit() {
    const [client, setClient] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

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
    setClient(true);

    return () => {
      window.removeEventListener("scroll", headerChangeOnScroll);
    };
  }, []);

  return client;
}
