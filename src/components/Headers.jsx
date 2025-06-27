import logoImg from "../assets/headlogo.png";
import logoImg2 from "../assets/shopping.svg";

function Headers() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <img src={logoImg} alt="" />
            <ul>
              <li>HOME</li>
              <li>HEADPHONES</li>
              <li>SPEAKERS</li>
              <li>EARPHONES</li>
            </ul>

            <img src={logoImg2} alt="" />
          </nav>
          <span></span>
          <h1>HEADPHONES</h1>
        </div>
      </header>
    </>
  );
}

export default Headers;
