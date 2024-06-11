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
              <box-icon type="logo" name="linkedin"></box-icon>
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

      <section className="education" id="education">
        <h2 className="heading">Vzdělání</h2>
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2020</div>
            <div className="timeline-content">
              <h3>Základní škola</h3>
              <p>
                Základní školu jsem dokončil na ZŠ Rakovského, ale studoval jsem
                také na dalších dvou základních školách. To mi pomohlo zlepšit
                svoje komunikační schopnosti a adaptabilitu v různých
                prostředích.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Střední škola</h3>
              <p>
                Středoškolské vzdělání v oboru IT jsem získal na 1. KŠPA v
                Praze. Zde jsem se také začal více věnovat oblasti IT.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024-27</div>
            <div className="timeline-content">
              <h3>Vysoká škola</h3>
              <p>
                Byl jsem přijat na Unicorn University, kde budu studovat obor
                Software Development. Studium teprve začínám, ale těším se na
                nové výzvy a příležitosti, které mi tato škola přinese
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
      </section>
      <section className="services" id="services">
        <h2 className="heading">Skills</h2>
        <div className="services-container">
          <div className="service-box">
            <div className="service-info">
              <h4>Webstack</h4>
              <p>
                Umím pracovat s HTML, CSS, SCSS a JavaScript. HTML využívám k
                definování struktury stránek, CSS k formátování vzhledu, SCSS k
                efektivnějšímu psaní stylů a JavaScript k přidání interaktivity.
                Díky těmto dovednostem jsem schopen vytvářet moderní a dynamické
                webové stránky.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-info">
              <h4>Frameworks × tools</h4>
              <p>
                Mám zkušenosti s React.js, knihovnou pro tvorbu uživatelských
                rozhraní pomocí komponent a virtuálního DOM. Používám nástroje
                jako WebPack pro správu závislostí a optimalizaci výkonu a Vite,
                moderní buildovací nástroj s rychlým dev serverem a buildovými
                procesy pro Vue a React.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-info">
              <h4>UX/UI</h4>
              <p>
                Mám základy UX/UI designu, včetně tvorby uživatelsky přívětivých
                rozhraní a optimalizace uživatelského zážitku. Umím navrhovat
                rozložení stránek, vybírat vhodné barevné schémata a typografii
                a vytvářet prototypy. Tyto dovednosti mi umožňují vytvářet
                intuitivní a vizuálně atraktivní webové aplikace.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-info">
              <h4>Jazyky</h4>
              <p>
                Ovládám čtyři jazyky: angličtinu plynule a češtinu, ukrajinštinu
                a ruštinu na výborné úrovni. Díky těmto dovednostem jsem schopen
                snadno komunikovat a efektivně spolupracovat s různými
                kulturními a jazykovými skupinami, což přispívá k mé flexibilitě
                a schopnosti rychle se přizpůsobit různým situacím.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="testimonials" id="testimonials">
        <div className="testimonials-box">
          <h2 className="heading">Projekty</h2>
          <div className="wrapper">
            <div className="testimonial-item">
              <img src="/GradRead.png" alt="Vasyl" />
              <h2>GradRead</h2>
              <p>
                Grad Read je projekt o maturitní četbě, vytvořený pomocí
                moderního frameworku React.js ve spolupráci s nástrojem Vite,
                který umožňuje rychlý a efektivní vývoj webových aplikací.
              </p>
            </div>

            <div className="testimonial-item">
              <img src="/MyWeb.png" alt="Vasyl" />
              <h2>MyWeb</h2>
              <p>
                MyWeb je stránka, na které se právě nacházíme. Byla vytvořena
                pomocí frameworku React.js, avšak s využitím nástroje WebPack
                místo Vite.
              </p>
            </div>

            <div className="testimonial-item">
              <img src="/Webfinity.png" alt="Vasyl" />
              <h2>Webfinity</h2>
              <p>
                Webfinity je tzv. "vanilla" stránka zaměřená na prodej webových
                stránek, která byla vytvořena pomocí HTML, CSS a JavaScriptu bez
                použití jakéhokoli frameworku.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <h2 className="heading">
          Kontaktujte <span>Mě</span>
        </h2>
        <form action="">
          <div className="input-group">
            <div className="input-box">
              <input type="text" placeholder="jméno" />
              <input type="email" placeholder="Email" />
            </div>
          </div>
          <div className="input-group-2">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Zpráva"
            ></textarea>
            <input type="submit" value="Poslat zprávu" className="btn" />
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="social">
          <a href="https://github.com/Vasaaa24">
            <box-icon type="logo" name="github"></box-icon>
          </a>
          <a href="https://www.instagram.com/_.vasaaa.__?igsh=MTU2MGF0Nnoyc3Q3MQ%3D%3D&utm_source=qr">
            <box-icon name="instagram-alt" type="logo"></box-icon>
          </a>
          <a href="https://www.facebook.com/vasyl.halychka">
            <box-icon type="logo" name="facebook-circle"></box-icon>
          </a>
          <a href="https://www.jobstack.it/profilepreview">
            <box-icon type="logo" name="linkedin"></box-icon>
          </a>
        </div>
        <ul className="list">
          <li>
            <a href="#home">Úvod</a>
          </li>
          <li>
            <a href="#education">Vzdělání</a>
          </li>
          <li>
            <a href="#services">Skills</a>
          </li>
          <li>
            <a href="#testimonials">Projekty</a>
          </li>
          <li>
            <a href="#contact">Kontakty</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
