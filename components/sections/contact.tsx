"use client";

import React from "react";

export default function Contact() {
  const contactItems = [
    {
      iconClass: "mi-location",
      title: "Address",
      text: "Envato Pty Ltd, PO Box 16122 Collins Street, West Victoria.",
      link: {
        url: "https://goo.gl/maps/7Vw1PBhxx5BaXStr8",
        text: "See Map",
        rel: "nofollow noopener",
        target: "_blank",
      },
    },
    {
      iconClass: "mi-email",
      title: "Email",
      text: "elitethemes24@gmail.com",
      link: {
        url: "mailto:elitethemes24@gmail.com",
        text: "Say Hello",
      },
    },
    {
      iconClass: "mi-mobile",
      title: "Phone",
      text: "+1 837 652 8800",
      link: {
        url: "tel:+61383767284",
        text: "Call now",
      },
    },
  ];

  return (
    <>
      <div className="row wow fadeInUp">
        {/* Left Column */}
        <div className="col-lg-5 mb-md-50 mb-sm-30 d-flex align-items-strech">
          <div
            className="bg-color-primary-1 bg-color-alpha-90 bg-image bg-scroll light-content w-100 round overflow-hidden px-4 px-sm-5 py-5"
            style={{
              backgroundImage: "url(/images/demo-corporate/section-bg-4.jpg)",
            }}
          >
            {/* Address */}
            {contactItems.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className={`contact-item ${
                    index !== 3 ? "mb-40 mb-sm-20" : ""
                  }`}
                >
                  <div className="ci-icon">
                    <i className={item.iconClass} />
                  </div>
                  <h4 className="ci-title">{item.title}</h4>
                  <div className="ci-text large">{item.text}</div>
                  <div className="ci-link">
                    <a
                      href={item.link.url}
                      rel={item.link.rel}
                      target={item.link.target}
                    >
                      {item.link.text}
                    </a>
                  </div>
                </div>{" "}
                {index !== contactItems.length - 1 && (
                  <hr className="mt-0 mb-40 mb-sm-20 opacity-02" />
                )}
              </React.Fragment>
            ))}
            {/* End Phone */}
          </div>
        </div>
        {/* End Left Column */}
        {/* Right Column */}
        <div className="col-lg-7 d-flex align-items-strech">
          <div className="border-color-primary-1 round w-100 px-4 px-sm-5 py-5">
            <h3 className="section-title-small mt-n10 mb-40 mb-sm-30">
              We&apos;d love to hear from you
            </h3>
            {/* Contact Form */}
            <form
              className="form contact-form"
              id="contact_form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="row">
                <div className="col-md-6">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      required
                      aria-required="true"
                      className="input-lg round form-control"
                      id="name"
                      name="name"
                      pattern=".{3,100}"
                      placeholder="Enter your name"
                      type="text"
                    />
                  </div>
                  {/* End Name */}
                </div>
                <div className="col-md-6">
                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      required
                      aria-required="true"
                      className="input-lg round form-control"
                      id="email"
                      name="email"
                      pattern=".{5,100}"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  {/* End Email */}
                </div>
              </div>
              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="input-lg round form-control"
                  defaultValue={""}
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  style={{ height: 132 }}
                />
              </div>
              <div className="row">
                <div className="col-md-6 col-xl-7 d-flex align-items-center">
                  {/* Inform Tip */}
                  <div className="form-tip w-100 pt-3">
                    <i className="icon-info size-16" />
                    All the fields are required. By sending the form you agree
                    to the <a href="/#">Terms &amp; Conditions</a> and{" "}
                    <a href="/#">Privacy Policy</a>.
                  </div>
                  {/* End Inform Tip */}
                </div>
                <div className="col-md-6 col-xl-5 mt-sm-20">
                  {/* Send Button */}
                  <div className="pt-3 text-md-end">
                    <button
                      aria-controls="result"
                      className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                      id="submit_btn"
                      type="submit"
                    >
                      <span>Send Message</span>
                    </button>
                  </div>
                  {/* End Send Button */}
                </div>
              </div>
              <div
                aria-atomic="true"
                aria-live="polite"
                id="result"
                role="region"
              />
            </form>
            {/* End Contact Form */}
          </div>
        </div>
        {/* End Right Column */}
      </div>
    </>
  );
}
