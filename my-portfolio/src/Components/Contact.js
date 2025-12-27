import Lottie from "lottie-react";
import contactAnimation from "../assets/contact-email.json";
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from "react-icons/fa";

export const Contact = () => {

  return (
    <div
      id="contactSection"
      className="p-3 d-flex align-items-center justify-content-center mt-5"
    >
      <div className="row contact-content-wrapper py-5 px-md-5 w-100">

        {/* LEFT SECTION */}
        <div className="col-md-5 col-12 px-md-0 px-3 contact-information-container text-white">
          
          {/* Availability Badge */}
          <span className="badge bg-success mb-3 px-3 py-2 my-2">
            ✅ Available for Opportunities
          </span>

          {/* <h4 className="heading-text mt-3">CONTACT</h4> */}
          <h1 className="contact-subheading-text">Get In Touch</h1>

          <p className="contact-text fs-5 my-3">
           I’m excited to contribute my skills and perspective to a team building meaningful products.
           If my background aligns with your needs, I’d love to connect and explore how I can add value.
          </p>

        {/* Social Links */}
        <div className="contact-links py-3 d-flex flex-wrap gap-3">
          <a
            href="mailto:mukul8756@gmail.com"
            className="contact-mail-link"
            >
            <span className="contact-link-icon">
                <FaEnvelope size={24} />
            </span>
        </a>

        <a
            href="https://github.com/mukul-pixel"
            className="contact-link-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
        >
            <FaGithub size={24} />
        </a>

        <a
            href="https://www.linkedin.com/in/mukul-khatri-619b78262/"
            className="contact-link-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
        >
            <FaLinkedin size={24} />
        </a>

        <a
            href="https://leetcode.com/u/mukulkhatri2/"
            className="contact-link-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
        >
            <FaCode size={24} />
        </a>
        </div>
        </div>

        {/* RIGHT SECTION – LOTTIE */}
        <div className="col-md-7 col-12 px-0 text-center d-flex justify-content-center">
          <Lottie
            animationData={contactAnimation}
            loop={true}
            style={{ maxWidth: "350px" }}
          />
        </div>
      </div>
    </div>
  );
}
