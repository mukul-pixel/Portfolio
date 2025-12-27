import React from 'react'
import { useState } from "react";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contact-email.json";

export const Contact = () => {
 const [copiedField, setCopiedField] = useState("");

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);

    setTimeout(() => {
      setCopiedField("");
    }, 2000);
  };

  return (
    <div
      id="contactSection"
      className="p-3 d-flex align-items-center justify-content-center"
    >
      <div className="row contact-content-wrapper py-5 px-md-5 w-100">

        {/* LEFT SECTION */}
        <div className="col-md-5 col-12 px-md-0 px-2 contact-information-container text-white">
          
          {/* Availability Badge */}
          <span className="badge bg-success mb-3 px-3 py-2 my-2">
            ✅ Available for Opportunities
          </span>

          {/* <h4 className="heading-text mt-3">CONTACT</h4> */}
          <h1 className="contact-subheading-text">Get In Touch</h1>

          <p className="contact-text fs-5 my-3">
            I'm eager to contribute my skills and dedication to your company.
            Give me the opportunity to work for you, and I promise I won’t disappoint.
            Let’s connect!
          </p>

          {/* Email */}
          <div
            className="d-flex align-items-center gap-2 mb-2 cursor-pointer"
            onClick={() =>
              handleCopy("mukul8756@gmail.com", "email")
            }
          >
            <span className="contact-link">
              📬 mukul8756@gmail.com
            </span>
            {copiedField === "email" && (
              <span className="text-success small">Copied!</span>
            )}
          </div>

          {/* Phone */}
          <div
            className="d-flex align-items-center gap-2 cursor-pointer"
            onClick={() =>
              handleCopy("6350018762", "phone")
            }
          >
            <span className="contact-link">
              📞 6350018762
            </span>
            {copiedField === "phone" && (
              <span className="text-success small">Copied!</span>
            )}
          </div>

          {/* Social Links */}
          <div className="contact-links py-3 d-flex flex-wrap gap-3">
            <a
              href="https://github.com/mukul-pixel"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mukul-khatri-619b78262/"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/mukulkhatri2/"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
          </div>
        </div>

        {/* RIGHT SECTION – LOTTIE */}
        <div className="col-md-7 col-12 px-0 text-center d-flex justify-content-center">
          <Lottie
            animationData={contactAnimation}
            loop={true}
            style={{ maxWidth: "420px" }}
          />
        </div>

      </div>
    </div>
  );
}
