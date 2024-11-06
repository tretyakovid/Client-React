/* eslint-disable jsx-a11y/anchor-is-valid */
import { forwardRef } from "react";

import "./Contacts.css";

function Contacts({ props }, ref) {
  return (
    <section className="contacts" id="contacts" ref={ref}>
      <div className="wrapper">
        <div className="contacts__content">
          <p>--Техподдержка--</p>
          <div className="contacts-group">
            <a href="tel:+xxxxxxxxxxx" className="contact-link">
              +X XXX XXX XX XX
            </a>
            <a href="mailto:testemail@gmail.com" className="contact-link">
              testemail@gmail.com
            </a>
          </div>
          <p>--Социальные сети--</p>
          <div className="socials">
            <a href="#" className="social-link">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="dig-UIIcon"
                width="32"
                height="32"
                role="presentation"
                focusable="false"
              >
                <path
                  d="M20 12a8 8 0 0 0-8-8 8.001 8.001 0 0 0-1.25 15.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.009c-.994 0-1.303.617-1.303 1.25V12h2.219l-.355 2.313H13.25v5.59A8.001 8.001 0 0 0 20 12Z"
                  fill="#000"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="dig-UIIcon"
                width="32"
                height="32"
                role="presentation"
                focusable="false"
              >
                <path
                  d="M20 12a8 8 0 0 0-8-8 8.001 8.001 0 0 0-1.25 15.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.009c-.994 0-1.303.617-1.303 1.25V12h2.219l-.355 2.313H13.25v5.59A8.001 8.001 0 0 0 20 12Z"
                  fill="#000"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="dig-UIIcon"
                width="32"
                height="32"
                role="presentation"
                focusable="false"
              >
                <path
                  d="M20 12a8 8 0 0 0-8-8 8.001 8.001 0 0 0-1.25 15.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.009c-.994 0-1.303.617-1.303 1.25V12h2.219l-.355 2.313H13.25v5.59A8.001 8.001 0 0 0 20 12Z"
                  fill="#000"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default forwardRef(Contacts);
