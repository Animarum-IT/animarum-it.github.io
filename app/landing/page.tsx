import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import AnimatedButton from "@/components/common/animatedButton";
import Service from "@/components/sections/services";
import Contact from "@/components/sections/contact";
import React from "react";

const Landing = () => {

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
                            <Hero />
                        </section>

                        {/* <Home4 onePage /> */}
                        <hr className={`mt-0 mb-0 `} />
                        <section
                            className={`page-section scrollSpysection
                    } `}
                            id="about"
                        >
                            <div className="bg-line-1 opacity-025">
                                <img
                                    alt=""
                                    className="wow fadeIn"
                                    data-wow-delay="0.4s"
                                    height={513}
                                    src="/images/demo-corporate/decoration-2.svg"
                                    width={1600}
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
                                            Marketing is the activity, set of institutions, and
                                            processes for creating, communicating, delivering, and
                                            exchanging offerings that have value for customers
                                            partners, and society at large. However, the definition of
                                            marketing has evolved over the years.
                                        </p>
                                    </div>
                                </div>

                                <div className="local-scroll text-center">
                                    <a
                                        className={`btn btn-mod btn-w btn-with-icon btn-circle`}
                                        href="#services"
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
                                backgroundImage: "url(/images/demo-corporate/section-bg-1.png)",
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
                                            Get <span className="mark-decoration-5">free</span> solution discovery consultation
                                        </h2>
                                        <p className="section-descr mb-50 mb-sm-40">
                                            Contact us to give you a free consultation on solution discovery.
                                        </p>
                                        <div className="local-scroll mb-70 mb-sm-50">
                                            <a
                                                className="btn btn-mod btn-w-c btn-large btn-round btn-hover-anim opacity-09"
                                                href="#contact"
                                            >
                                                <span>Get a Consultation</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <section
                            className={`page-section pb-0 scrollSpysection`}
                            id="services"
                        >
                            <div className="container position-relative">
                                <div className="row mb-70 mb-sm-50">
                                    <div className="col-md-8 offset-md-2 text-center">
                                        <h2 className="section-title mb-40 mb-xs-30">
                                            ANIMARUM provides
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <Service />
                            {/* End Services Grid */}

                            {/* Decorative Line */}

                        </section>
                        <section className={`page-section  scrollSpysection`} id="contact">
                            <div className="bg-line-3 opacity-025 mb-n90 mb-lg-n70 mb-md-n60 mb-sm-n40">
                                <img
                                    alt=""
                                    height={206}
                                    src="/images/demo-corporate/decoration-4.svg"
                                    width={1600}
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
                                            We’re open to talking to good people. Just say hello, and
                                            we’ll start productive cooperation. Start your own success
                                            story.
                                        </p>
                                    </div>
                                </div>{" "}
                                <Contact />
                            </div>
                        </section>
                        <hr className={`mt-0 mb-0`} />
                    </main>
                    <footer className="footer-2 pb-50">{/* <Footer4 /> */}</footer>
                </div>
            </div>
        </>
    );

    // return (
    //   <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    //     <div className="inline-block max-w-xl text-center justify-center">
    //       <h1 className={title()}>Make&nbsp;</h1>
    //       <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
    //       <br />
    //       <h1 className={title()}>
    //         websites regardless of your design experience.
    //       </h1>
    //       <h2 className={subtitle({ class: "mt-4" })}>
    //         Beautiful, fast and modern React UI library.
    //       </h2>
    //     </div>

    //     <div className="flex gap-3">
    //       <Link
    //         isExternal
    //         className={buttonStyles({
    //           color: "primary",
    //           size: "lg",
    //           variant: "shadow",
    //         })}
    //         href={siteConfig.links.docs}
    //       >
    //         Connect
    //       </Link>
    //       <Link
    //         isExternal
    //         className={buttonStyles({ variant: "bordered", radius: "full" })}
    //         href={siteConfig.links.github}
    //       >
    //         <GithubIcon size={20} />
    //         GitHub
    //       </Link>
    //     </div>

    //     <div className="mt-8">
    //       <Snippet hideCopyButton hideSymbol variant="bordered">
    //         <span>
    //           Get started by editing <Code color="primary">app/page.tsx</Code>
    //         </span>
    //       </Snippet>
    //     </div>
    //   </section>
    // );
};

export default Landing;
