import React from "react";

const Projects = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-box">
        <h2 className="heading">Projekty</h2>
        <div className="wrapper">
        <div className="testimonial-item">
            <img src="/tburger.png" alt="Tburger" />
            <h2>Tburger</h2>
            <p>
            Tento web je určen pro fast food restauraci, která nabízí přehled menu, možnost objednávky, kontaktní formulář a další interaktivní prvky, postavený na HTML, CSS, JavaScriptu, jQuery a Bootstrapu.
            </p>
            <div className="links">
              <a href="https://tburger.vercel.app/">
                <box-icon name="link-external" color="#00ffee"></box-icon>
              </a>
            </div>
            
          </div>
         

          <div className="testimonial-item">
            <img src="/Webfinity.png" alt="Webfinity" />
            <h2>Webfinity</h2>
            <p>
              Webfinity je webshop vytvořený pomocí React.js, HTML, CSS a WebPacku, což
              umožňuje efektivní správu závislostí, optimalizaci kódu a
              vynikající uživatelskou zkušenost.
            </p>
            <div className="links">
              <a href="https://webfinity-team.vercel.app/">
                <box-icon name="link-external" color="#00ffee"></box-icon>
              </a>
            </div>
          </div>

          <div className="testimonial-item">
            <img src="/checkit.png" alt="Checkit" />
            <h2>Checkit</h2>
            <p>
            Checkit je jednoduchý web pro měření času s funkcemi stopwatchu, timeru, sledování kol, 
            přepínáním mezi tématy a vícejazyčnou podporou, postavená na JavaScriptu, HTML a CSS.
            </p>
            <div className="links">
              <a href="https://checkit-js.vercel.app/">
                <box-icon name="link-external" color="#00ffee"></box-icon>
              </a>
            </div>
            
          </div>
          <div className="testimonial-item">
            <img src="/GradRead.png" alt="GradRead" />
            <h2>GradRead</h2>
            <p>
              Grad Read je projekt o maturitní četbě, vytvořený pomocí moderního
              frameworku React.js, HTML, CSS ve spolupráci s nástrojem Vite, který umožňuje
              rychlý a efektivní vývoj webových aplikací.
            </p>
            <div className="links">
              <a href="https://grad-read.vercel.app/">
                <box-icon name="link-external" color="#00ffee"></box-icon>
              </a>
            </div>
          </div>

          <div className="testimonial-item">
            <img src="/game.png" alt="DragonWay" />
            <h2>Dragon way</h2>
            <p>
            Dragon way je interaktivní RPG hra, kde hráč sleduje své statistiky, jako XP, zdraví a zlato, 
            a pomocí tlačítek provádí akce jako návštěvu obchodu, jeskyně nebo boj s drakem, postavená na JavaScriptu, HTML a CSS.
            </p>
            <div className="links">
              <a href="https://dragon-way.vercel.app/">
                <box-icon name="link-external" color="#00ffee"></box-icon>
              </a>
            </div>
          </div>
          <div className="testimonial-item">
            <img src="/about.png" alt="AboutVasyl" />
            <h2>Abou Vasyl</h2>
            <p>
            Toto je web, na kterém se nacházíte, vytvořený pomocí React.js, HTML, CSS a Webpacku, 
            a slouží jako moje online CV pro lepší seznámení a představení mých dovedností a zkušeností.
            </p>
            <div className="links">
              <a href="https://about-vasyl.vercel.app/">
                <box-icon name="link-external" color="#00ffee"></box-icon>
              </a>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Projects;
