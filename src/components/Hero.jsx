import img from "../assets/headphones3.jpg";
import img2 from "../assets/Group 3.png";
import img3 from "../assets/Group 4.jpg";
import img4 from "../assets/people.png";
import Button from "./button";

function Hero() {
  return (
    <>
      <main className="container">
        <div>
          {/*  card-1 */}
          <div className="card">
            <img src={img} alt="" />
            <div className="content">
              <h2 className="title-1">NEW PRODUCT</h2>
              <h2 className="title-2">XX99 Mark II Headphones</h2>
              <p>
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <Button />
            </div>
          </div>

          {/*  card-2 */}
          <div className="card2">
            <img src={img2} alt="" />
            <div className="content">
              <h2 className="title-1">NEW PRODUCT</h2>
              <h2 className="title-2">XX99 Mark II Headphones</h2>
              <p>
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <Button />
            </div>
          </div>

          {/*  card-3 */}
          <div className="card">
            <img src={img3} alt="" />
            <div className="content">
              <h2 className="title-1">NEW PRODUCT</h2>
              <h2 className="title-2">XX99 Mark II Headphones</h2>
              <p>
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <Button />
            </div>
          </div>

          {/* people */}
          <div className="people">
            <div className="people-content">
              <h2>
                Bringing you the <span className="highlights">best</span> audio
                gear
              </h2>
              <p>
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
            <img src={img4} alt="" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
