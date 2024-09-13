export const toggleMobileMenu = (): void => {
  const mobile_nav: HTMLElement | null = document.querySelector(".mobile-nav");
  const desktop_nav: HTMLElement | null = document.querySelector(".desktop-nav");

  if (desktop_nav && desktop_nav.classList.contains("js-opened")) {
    desktop_nav.style.maxHeight = "0px";
    desktop_nav.classList.remove("js-opened");
    if (mobile_nav) {
      mobile_nav.classList.remove("active");
    }
  } else {
    if (desktop_nav) {
      desktop_nav.style.maxHeight = "calc(100vh - 60px)";
      desktop_nav.classList.add("js-opened");
      if (mobile_nav) {
        mobile_nav.classList.add("active");
      }
    }
  }
};

export const closeMobileMenu = (): void => {
  const mobile_nav: HTMLElement | null = document.querySelector(".mobile-nav");
  const desktop_nav: HTMLElement | null = document.querySelector(".desktop-nav");

  if (desktop_nav && desktop_nav.classList.contains("js-opened")) {
    desktop_nav.style.maxHeight = "0px";
    desktop_nav.classList.remove("js-opened");
    if (mobile_nav) {
      mobile_nav.classList.remove("active");
    }
  }
};