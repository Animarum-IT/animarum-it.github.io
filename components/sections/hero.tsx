const Hero = () => {
  const features = [
    { id: 1, text: "AI-Driven Solutions" },
    { id: 2, text: "Cloud Computing Services" },
    { id: 3, text: "Cybersecurity & Risk Management" },
  ];

  return (
    <div className="container position-relative d-flex align-items-center">
      {/* Home Section Content */}
      <div className="home-content text-start mt-n40">
        <div className="row">
          {/* Home Section Text */}
          <div className="col-lg-6 col-xl-5 offset-xl-1 d-flex align-items-center order-first order-lg-last mb-md-60">
            <div className="w-100 text-center text-lg-start">
              <h1 className="hs-title-9 mb-40 mb-sm-20 wow fadeInUp">
                Transform Your Business with Cutting-Edge AI and IT Solutions
              </h1>
              <p
                className="hs-descr mb-50 mb-sm-40 wow fadeInUp"
                data-wow-delay="0.15s"
              >
                Leverage the power of Artificial Intelligence and
                state-of-the-art IT consultancy to unlock growth, efficiency,
                and innovation.
              </p>
              <div
                className="wow fadeInUp wch-unset"
                data-wow-delay="0.3s"
                data-wow-offset={0}
              >
                <div className="local-scroll mb-60 mb-sm-50">
                  <a
                    className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                    href="#contact"
                  >
                    <span>Get a Consultation</span>
                  </a>
                </div>
                {/* Features List */}
                <div className="mt-n10">
                  {/* Features List Item */}
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className="d-flex justify-content-center justify-content-lg-start mt-10"
                    >
                      <div className="features-list-icon">
                        <i className="mi-check" />
                      </div>
                      <div className="features-list-text">{feature.text}</div>
                    </div>
                  ))}
                  {/* End Features List Item */}
                </div>
                {/* End Features List */}
              </div>
            </div>
          </div>
          {/* End Home Section Text */}
          {/* Images */}
          <div className="col-lg-6">
            <div className="composition-8">
              {/* Decorative Dots */}
              <div
                className="composition-8-decoration-1 mt-n90 mt-md-n60 wow fadeIn"
                data-wow-duration="1.3s"
              >
                <img
                  alt=""
                  height={304}
                  src="/images/demo-corporate/decoration-1.svg"
                  width={253}
                />
              </div>
              {/* End Decorative Dots */}
              {/* Main Image */}
              <div className="composition-8-image bg-white">
                <img
                  alt=""
                  className="wow fadeScaleOutIn"
                  data-wow-duration="1.3s"
                  height={800}
                  src="/images/demo-corporate/hs-image-2.jpg"
                  width={706}
                />
              </div>
              {/* End Main Image */}
              {/* Overlay Buttons */}
              <div
                className="composition-8-decoration-2 local-scroll wow fadeIn animated"
                data-wow-duration="1.3s"
                data-wow-offset={0}
                style={{
                  visibility: "visible",
                  animationDuration: "1.3s",
                  animationName: "fadeIn",
                }}
              >
                <div className="mt-10">
                  <a
                    className="btn btn-mod btn-w btn-with-icon btn-circle"
                    href="#services"
                  >
                    <span className="btn-icon color-3">
                      <i aria-hidden="true" className="mi-user" />
                    </span>
                    <span data-btn-animate="y">
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          Marketing Consulting
                        </span>
                        <span aria-hidden="true" className="btn-animate-y-2">
                          Marketing Consulting
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="mt-10">
                  <a
                    className="btn btn-mod btn-w btn-with-icon btn-circle"
                    href="#services"
                  >
                    <span className="btn-icon color-2">
                      <i aria-hidden="true" className="mi-search" />
                    </span>
                    <span data-btn-animate="y">
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          Search Engine Optimization
                        </span>
                        <span aria-hidden="true" className="btn-animate-y-2">
                          Search Engine Optimization
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="mt-10">
                  <a
                    className="btn btn-mod btn-w btn-with-icon btn-circle"
                    href="#services"
                  >
                    <span className="btn-icon color-4">
                      <i aria-hidden="true" className="mi-message" />
                    </span>
                    <span data-btn-animate="y">
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          Social Media Marketing
                        </span>
                        <span aria-hidden="true" className="btn-animate-y-2">
                          Social Media Marketing
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              {/* End Overlay Buttons */}
            </div>
          </div>
          {/* End Images */}
        </div>
      </div>
      {/* End Home Section Content */}
    </div>
  );
};

export default Hero;
