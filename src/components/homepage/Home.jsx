import React from "react";
import "boxicons";

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Ahoj, tady <span>Vasyl</span>
          </h1>
          <h3 className="text-animation">
            Jsem <span></span>
          </h3>
          <p style={{ fontSize: "17px" }}>
           Zabývám se vývojem webových aplikací a softwarových řešení v oblasti IT. Aktuálně pracuji především jako SAP UI5 / Fiori developer, kde se věnuji vývoji moderních enterprise aplikací, práci s OData službami, TypeScriptem a integraci frontendových řešení s backendem.

Mým zaměřením je tvorba moderních, uživatelsky přívětivých a funkčních aplikací, které splňují aktuální technologické standardy a požadavky trhu. Kromě vývoje se věnuji také CI/CD procesům, práci s GitLabem, Dockerem a návrhu UI/UX ve Figmě.

Ve volném čase rád sportuji a cestuji.
          </p>

          <div className="social-icons">
            <a href="https://github.com/Vasaaa24">
              <box-icon type="logo" name="github"></box-icon>
            </a>
            <a href="https://www.instagram.com/_.vasaaa.__?igsh=MTU2MGF0Nnoyc3Q3MQ%3D%3D&utm_source=qr">
              <box-icon type="logo" name="instagram-alt"></box-icon>
            </a>
            <a href="https://www.facebook.com/vasyl.halychka">
              <box-icon type="logo" name="facebook-circle"></box-icon>
            </a>
            <a href="https://www.linkedin.com/in/vasyl-haly%C4%8Dka-763b51313/">
            <box-icon type='logo' name='linkedin'></box-icon>
            </a>
          </div>

          <div className="btn-group">
            <a href="#contact" className="btn">
              Napsat
            </a>
            <a href="#services" className="btn">
              Znalosti
            </a>
          </div>
        </div>
        <div className="home-img">
          <img src="/ja.jpeg" alt="Vasyl" />
        </div>
      </section>
    </div>
  );
};

export default Home;
