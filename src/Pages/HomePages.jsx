import "bootstrap/dist/css/bootstrap.min.css";
import Image from "../assets/img/Hero/Nike.png";
import Brand from "../assets/img/Brand/Brand.png";
import Brand2 from "../assets/img/Brand/Brand2.png";
import Brand3 from "../assets/img/Brand/Brand3.png";
import Brand4 from "../assets/img/Brand/Brand4.png";

const HeroSection = () => {
  const logosAbove = [Brand, Brand2, Brand3, Brand4];
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div data-aos="fade-left" className="col-lg-6 order-lg-2">
              <img src={Image} alt="Hero Image" className="img-fluid" />
            </div>
            <div data-aos="fade-right" className="collapse-text col-lg-6 order-lg-1">
              <h1 className="display-4">Farda Syarif The Nike Frontend Dev</h1>
              <p className="lead">The Most Creative And Experince Frontend Dev.</p>
              <a href="#About" className="btn">
                Mulai
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="About" data-aos="fade-up">
        <div className="About-Me">
          <h1 className="Text-About">Collaborate with brands and agencies to create impactful results.</h1>
        </div>
        <div className="container mt-5">
          <div className="logo-row">
            {logosAbove.map((logo, index) => (
              <img key={`logo-above-${index + 1}`} className="logo-item" src={logo} alt={`Logo ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>
      <section id="Hire-me" data-aos="zoom-in">
        <div className="Hire-me-div">
          <h1 className="Text-Hire-Me">Lets discusses About Our New Or Next Project</h1>
        </div>
        <div className="hire-button">
          <a>Hire Me</a>
        </div>
      </section>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <HeroSection />
    </div>
  );
}

export default App;
