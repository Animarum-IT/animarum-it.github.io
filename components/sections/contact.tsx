'use client'

import React, { SyntheticEvent } from "react";

interface RequestData {
  subject: string;
  name: string;
  body: string;
}


function getMailtoUrl(to: string, subject: string, body: string) {
  var args = [];
  if (typeof subject !== 'undefined') {
      args.push('subject=' + encodeURIComponent(subject));
  }
  if (typeof body !== 'undefined') {
      args.push('body=' + encodeURIComponent(body))
  }

  var url = 'mailto:' + encodeURIComponent(to);
  if (args.length > 0) {
      url += '?' + args.join('&');
  }
  return url;
}

const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form) as unknown as Iterable<
    [RequestData, FormDataEntryValue]
  >;
  const requestData: RequestData = Object.fromEntries(formData);

  const mailtoUrl = getMailtoUrl("hello@subject.com", requestData.subject, `[From]\n${requestData.name}\n\n[Message]\n${requestData.body}` )
  window.location.href = mailtoUrl;
};


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
        <div className="">
          <div
            className="bg-color-primary-1 bg-color-alpha-90 bg-image bg-scroll light-content w-100 round overflow-hidden px-4 px-sm-5 py-5 d-lg-flex align-items-strech"
            style={{
              backgroundImage: "url(/images/demo-corporate/section-bg-4.jpg)",
            }}
          >
            {/* Address */}
            {contactItems.map((item, index) => (
              <React.Fragment key={index}>
                <div
                style={{flex: 1}}
                  className={`contact-item ${index !== 3 ? "mb-40 mb-sm-20" : ""
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
        
      </div>
    </>
  );
}
