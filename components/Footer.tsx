import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="desktop-footer">
      <div className="footer-grid">
        <div>
          <h3>ABOUT US</h3>
          <p>
            Phantom Marketing is a creative agency with digital plans and
            promotional tools. Bringing your vision to life, we are on a mission
            to reshape the digital marketing landscape through brand recognition
            and creativity.
          </p>
        </div>

        <div>
          <h3>LEGAL</h3>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms &amp; Conditions</Link>
        </div>

        <div>
          <h3>FOLLOW, LIKE &amp; SUBSCRIBE</h3>

          <div className="social-row">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="X"><FaXTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
        </div>

        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps?q=Thailand&output=embed"
            title="Phantom Marketing - Thailand"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        </div>
      </div>

      <div
        className="footer-bottom"
        style={{
          paddingTop: "0px",
          paddingBottom: "0px",
          minHeight: "0",
        }}
      >
        <small className="footer-tagline">Your Digital Demons.</small>

        <Link href="/" className="footer-bottom-logo">
          <img
            src="/assets/logo/logo-white.gif"
            alt="Phantom Marketing"
            style={{
              width: "80px",
              height: "auto",
              display: "block",
            }}
          />
        </Link>

        <small className="footer-copyright">
          &copy; {new Date().getFullYear()} Phantom Marketing
        </small>
      </div>
    </footer>
  );
}