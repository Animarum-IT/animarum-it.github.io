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
                ANIMARUM transforms your business through engineering solutions.
              </h1>
              <p
                className="hs-descr mb-50 mb-sm-40 wow fadeInUp"
                data-wow-delay="0.15s"
              >
                We collaborate with you at every stage to develop innovative solutions that blend cutting-edge software solutions, seamless customer experiences, and advanced AI technology.
              </p>
              <div
                className="wow fadeInUp wch-unset"
                data-wow-delay="0.3s"
                data-wow-offset={0}
              >
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
                      <img
                        alt=""
                        height={20}
                        src="/images/services/ai1.png"
                        width={20}
                      />
                    </span>
                    <span data-btn-animate="y">
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          AIOps
                        </span>
                        <span aria-hidden="true" className="btn-animate-y-2">
                          AIOps
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
                      <img
                        alt=""
                        height={20}
                        src="/images/services/cloud1.png"
                        width={20}
                      />
                    </span>
                    <span data-btn-animate="y">
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          Cloud Engineering
                        </span>
                        <span aria-hidden="true" className="btn-animate-y-2">
                          Cloud Engineering
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
                      <img
                        alt=""
                        height={20}
                        src="/images/services/solutiondiscovery.png"
                        width={20}
                      />
                    </span>
                    <span data-btn-animate="y">
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          Solution Discovery
                        </span>
                        <span aria-hidden="true" className="btn-animate-y-2">
                          Solution Discovery
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
                    <span className="btn-icon color-5">
                      <img
                        alt=""
                        height={20}
                        src="/images/services/security.png"
                        width={20}
                      />
                    </span>
                    <span data-btn-animate="y">
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          Cybersecurity
                        </span>
                        <span aria-hidden="true" className="btn-animate-y-2">
                          Cybersecurity
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
