import logoImg from "../assets/headlogo.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <nav className="navbar">
          <img src={logoImg} alt="" />
          <ul>
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
          </ul>
        </nav>
        <div className="footer">
          <div className="text">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p>Copyright 2021. All Rights Reserved</p>
          </div>
          <div className="icon">
            <img src={facebook} width="24" height="24" alt="" />
            <img src={twitter} width="24" height="24" alt="" />
            <img src={instagram} width="24" height="24" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
