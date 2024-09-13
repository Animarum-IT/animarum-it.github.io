import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Counter } from "@/components/counter";
import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import { Lakki_Reddy } from "next/font/google";
import AnimatedButton from "@/components/common/animatedButton";
import Service from "@/components/sections/services";
import Contact from "@/components/sections/contact";



const Home = ({ dark = false }: { dark: boolean }) => {

  const testimonials4 = [
    {
      id: 1,
      delay: "0s",
      stars: 4.5,
      text: "“Really impressed with the service and the results!”",
      caption: "Rated 4.5 on Trustpilot",
    },
    {
      id: 2,
      delay: "0.15s",
      stars: 4.5,
      text: "“Excellent service for targeted lead generation.”",
      caption: "Rated 4.5 on Trustpilot",
    },
    {
      id: 3,
      delay: "0.3s",
      stars: 4.5,
      text: "“I have super enjoyed working with Resonance.”",
      caption: "Rated 4.5 on Trustpilot",
    },
  ];

  const clients = [
    {
      id: 1,
      src: "/images/clients-logos/logo-grid-dark/logo-1.png",
      width: 110,
      height: 33,
      alt: "Image description is here",
    },
    {
      id: 2,
      src: "/images/clients-logos/logo-grid-dark/logo-2.png",
      width: 119,
      height: 33,
      alt: "Image description is here",
    },
    {
      id: 3,
      src: "/images/clients-logos/logo-grid-dark/logo-3.png",
      width: 79,
      height: 33,
      alt: "Image description is here",
    },
    {
      id: 4,
      src: "/images/clients-logos/logo-grid-dark/logo-4.png",
      width: 122,
      height: 33,
      alt: "Image description is here",
    },
  ];

  return (
    <>
      <div className="theme-corporate">
        <div className="page" id="top">
          <nav className="main-nav transparent sticky wow-menubar wch-unset">
            <Header />
          </nav>

          <main id="main">
            <section className="page-section scrollSpysection" id="home">
              <Hero></Hero>
            </section>

            {/* <Home4 onePage /> */}
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
            <section
              className={`page-section scrollSpysection  ${dark ? "bg-dark-1 light-content" : ""
                } `}
              id="about"
            >
              <div className="bg-line-1 opacity-025">
                <img
                  src="/images/demo-corporate/decoration-2.svg"
                  width={1600}
                  height={513}
                  alt=""
                  className="wow fadeIn"
                  data-wow-delay="0.4s"
                />
              </div>
              {/* End Decorative Line */}
              <div className="container position-relative">
                <div className="row mb-70 mb-sm-50">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <h2 className="section-title mb-40 mb-xs-30">
                      High-rated Online Marketing Agency Based in New York
                    </h2>
                    <p className="section-descr dark-white mb-0">
                      Marketing is the activity, set of institutions, and processes
                      for creating, communicating, delivering, and exchanging
                      offerings that have value for customers partners, and society at
                      large. However, the definition of marketing has evolved over the
                      years.
                    </p>
                  </div>
                </div>
                {/* Testimonials Grid */}
                <div className="row mt-n50 mb-70 mb-sm-50">
                  {/* Testimonials Item */}
                  {testimonials4.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="col-md-4 mt-50 wow fadeInLeft"
                      data-wow-delay={testimonial.delay}
                    >
                      <div className="text-center px-lg-4">
                        <div className="testimonials-5-stars">
                          {[...Array(5)].map((_, index) => (
                            <i
                              key={index}
                              className={
                                index < Math.floor(testimonial.stars)
                                  ? "icon-star-rate"
                                  : "icon-star-rate-a"
                              }
                            />
                          ))}
                        </div>
                        <div className="testimonials-5-text">{testimonial.text}</div>
                        <div className="testimonials-5-caption">{testimonial.caption}</div>
                      </div>
                    </div>
                  ))}
                  {/* End Testimonials Item */}
                </div>

                {/* End Testimonials Grid */}
                <div className="local-scroll text-center">

                  <a
                    href="#services"
                    className={`btn btn-mod ${dark ? "btn-dark" : "btn-w"
                      } btn-with-icon btn-circle`}
                  >
                    <span className="btn-icon color-3">
                      <i className="mi-favorite" />
                    </span>
                    <span data-btn-animate="y">
                      <AnimatedButton text={"View Our Services"} />
                    </span>
                  </a>
                </div>
              </div>
            </section>

            <section
              className="page-section bg-scroll light-content"
              style={{
                backgroundImage:
                  "url(/images/demo-corporate/section-bg-1.jpg)",
              }}
            >
              {/* Desktop Overlay */}
              <div className="bg-overlay bg-gradient-primary-alpha-1 d-none d-md-block" />
              {/* End Desktop Overlay */}
              {/* Mobile Overlay */}
              <div className="bg-overlay bg-primary-1 opacity-09 d-md-none" />
              {/* End Mobile Overlay */}
              <div className="container position-relative">
                <div className="row">
                  <div className="col-md-7 col-lg-6 col-xl-5">
                    <h2 className="section-title mb-40 mb-xs-30">
                      Get <span className="mark-decoration-5">free</span> marketing
                      consultation online
                    </h2>
                    <p className="section-descr mb-50 mb-sm-40">
                      Contact us and get free marketing consultation for your
                      business.
                    </p>
                    <div className="local-scroll mb-70 mb-sm-50">
                      <a
                        href="#contact"
                        className="btn btn-mod btn-w-c btn-large btn-round btn-hover-anim opacity-09"
                      >
                        <span>Get a Consultation</span>
                      </a>

                    </div>
                  </div>
                </div>
                {/* Logotypes */}
                <div className="row">
                  <div className="col-md-6">
                    <h2 className="section-title-tiny opacity-09 mb-30">
                      Trusted by leading companies
                    </h2>
                    <div className="logo-grid">
                      {clients.map((logo) => (
                        <img
                          key={logo.id}
                          className="logo-grid-img"
                          src={logo.src}
                          width={logo.width}
                          height={logo.height}
                          alt={logo.alt}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* End Logotypes */}
              </div>{" "}
            </section>

            <section
        className={`page-section pb-0 scrollSpysection   ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <div className="container position-relative">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 text-center">
              <h2 className="section-title mb-40 mb-xs-30">
                Providing the Best Marketing Solutions for Our Clients
              </h2>
              <p className="section-descr mb-0">
                The marketing mix represents the basic tools that marketers can
                use to bring their products or services to the market.
              </p>
            </div>
          </div>
        </div>
        <Service />
        {/* End Services Grid */}
        {/* Call to Action Block */}
        <div className="container position-relative z-index-1">
          <div className="row text-center">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <div className="text-center mb-40 mb-sm-30">
                <img
                  src="/images/demo-corporate/section-image-1.png"
                  width={100}
                  height={100}
                  alt="Image Description"
                />
              </div>
              <p className="section-descr-medium mb-50 mb-sm-40">
                Looking for exclusive marketing services? Contact us and get
                free online consultation for your brand or your client's brand.
              </p>
              <div className="local-scroll text-center">
              <a
                      href="#contact"
                      className={`btn btn-mod ${
                        dark ? "btn-dark" : "btn-w"
                      } btn-with-icon btn-circle`}
                    >
                      <span className="btn-icon color-1">
                        <i className="mi-heart" />
                      </span>
                      <span data-btn-animate="y">
                        <AnimatedButton text={"Get Free Consultation"} />
                      </span>
                    </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Call to Action Block */}
        {/* Decorative Line */}
        <div className="bg-line-2 mt-n10 mt-md-20 opacity-025">
          <img
            src="/images/demo-corporate/decoration-3.svg"
            width={1600}
            height={243}
            alt=""
          />
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection`}
        id="contact"
      >
        <div className="bg-line-3 opacity-025 mb-n90 mb-lg-n70 mb-md-n60 mb-sm-n40">
          <img
            src="/images/demo-corporate/decoration-4.svg"
            width={1600}
            height={206}
            alt=""
          />
        </div>
        {/* End Decorative Line */}
        <div className="container position-relative">
          <div className="row mb-80 mb-sm-60">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-title mb-40 mb-xs-30">
                Let’s have a conversation
              </h2>
              <p className="section-descr dark-white mb-0">
                We’re open to talking to good people. Just say hello, and we’ll
                start productive cooperation. Start your own success story.
              </p>
            </div>
          </div>{" "}
          <Contact />
        </div>
      </section>
      <hr className={`mt-0 mb-0`} />

          </main>
          <footer className="footer-2 pb-50">
            {/* <Footer4 /> */}
          </footer>
        </div>
      </div>
    </>
  );
  return (

    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>
          websites regardless of your design experience.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </h2>
      </div>



      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            size: "lg",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Connect
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}

export default Home;