import React from "react";
import "./ContactUs.css";
import Heading from "../../../components/heading/Heading";
import mailOpen from "../../../public/MailOpen.svg";
import phoneSvg from "../../../public/Phone.svg";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-content">
        <Heading
          heading="GET IN"
          headingSpan="TOUCH"
          backgroundText="CONTACT"
        />
        <div className="contact-info">
          <div className="info">
            <div className="info-content">
              <h1 className="heading">DON&apos;T BE SHY !</h1>
              <p className="description">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <div className="email">
                <Image
                  src={mailOpen}
                  alt="mail"
                  width={50}
                  height={50}
                  className="mail-svg"
                />
                <div className="details">
                  <p>Mail Me</p>
                  <p>ahsanfarooq21@gmail.com</p>
                </div>
              </div>
              <div className="phone">
                <Image
                  src={phoneSvg}
                  alt="mail"
                  width={50}
                  height={50}
                  className="mail-svg"
                />
                <div className="details">
                  <p>Mail Me</p>
                  <p>ahsanfarooq21@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="upper">
                <div className="input-wrapper">
                  <input type="text" className="input"  placeholder="YOUR NAME" />
                </div>
                <div className="input-wrapper">
                  <input type="text" className="input" placeholder="YOUR EMAIL" />
                </div>
                <div className="input-wrapper">
                  <input type="text" className="input" placeholder="YOUR SUBJECT" />
                </div>
              </div>
              <textarea className="message" placeholder="YOUR MESSAGE" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
