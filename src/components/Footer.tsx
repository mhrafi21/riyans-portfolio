import React from "react";
import Container from "./Container";
import { Link } from "react-router";
import Title from "./Title";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Title subtitle="About Me" textColor="mb-4 text-gray-200" />
            <p className="text-gray-400 ">
              I’m a passionate photographer capturing moments that last forever.
              From intimate portraits to breathtaking landscapes, I bring
              stories to life through my lens.
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <Title subtitle="Quick Links" textColor="mb-4 text-gray-200" />
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <Title subtitle="Follow Me" textColor="mb-4 text-gray-200" />
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8H7v4h2v12h5V12h3.642L17 8h-3.358V6.5c0-.735.12-1.003 1.158-1.003H17V2h-2.462C12.721 2 12 2.835 12 4.062V8z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.2C6.935 2.2 2.8 6.336 2.8 11.4S6.935 20.6 12 20.6s9.2-4.136 9.2-9.2S17.065 2.2 12 2.2zm0 16.5c-4.018 0-7.3-3.283-7.3-7.3s3.283-7.3 7.3-7.3 7.3 3.283 7.3 7.3-3.283 7.3-7.3 7.3zm3.85-10.675c-.845 0-1.535.69-1.535 1.535s.69 1.535 1.535 1.535 1.535-.69 1.535-1.535-.69-1.535-1.535-1.535z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.556c-.883.392-1.832.656-2.828.775 1.018-.611 1.798-1.574 2.165-2.723-.953.564-2.005.974-3.127 1.195-.899-.959-2.178-1.56-3.594-1.56-2.719 0-4.924 2.206-4.924 4.924 0 .386.044.762.126 1.122C7.69 8.094 4.066 6.13 1.64 3.161c-.424.724-.666 1.562-.666 2.475 0 1.708.869 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.617v.062c0 2.388 1.698 4.382 3.946 4.835-.414.112-.85.171-1.296.171-.318 0-.627-.03-.929-.086.63 1.953 2.457 3.374 4.617 3.413-1.694 1.33-3.826 2.122-6.14 2.122-.399 0-.792-.023-1.177-.069C2.14 19.916 4.69 21 7.422 21c8.912 0 13.785-7.387 13.785-13.785 0-.21-.005-.42-.014-.63A9.9 9.9 0 0024 4.556z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <Title subtitle="Contact" textColor="mb-4 text-gray-200" />
            <ul className="text-gray-400 space-y-2">
              <li>
                Email:{" "}
                <Link
                  to="mailto:example@domain.com"
                  className="hover:text-white transition"
                >
                  example@domain.com
                </Link>
              </li>
              <li>
                Phone:{" "}
                <Link
                  to="tel:+1234567890"
                  className="hover:text-white transition"
                >
                  +1 234 567 890
                </Link>
              </li>
              <li>Location: Malibaugh, Dhaka.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} Ashiqur Rahman Riyan. All rights
          reserved.
          <i className="ml-1">
            Developed by{" "}
            <Link
              className="underline"
              to={"https://www.facebook.com/mdmahdihasan.rafi"}
              target="_blank"
            >
              Rafi
            </Link>
          </i>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
