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
          <p>
            Zabývám se vývojem webových stránek a různými aktivitami v oblasti
            IT. Mým hlavním zaměřením je tvorba moderních, uživatelsky
            přívětivých a funkčních webů, které splňují nejnovější standardy a
            požadavky trhu. Kromě práce v IT také rád sportuji a cestuji. Sport
            mi pomáhá udržovat se v kondici a cestování mi přináší nové
            zkušenosti a inspiraci, kterou pak mohu využít ve své práci.
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
            <a href="https://www.jobstack.it/profilepreview">
            <box-icon name='user'></box-icon>
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
