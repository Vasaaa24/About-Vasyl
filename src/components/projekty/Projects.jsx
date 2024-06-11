import React from 'react';

const Projects = () => {
    return (
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
            <div className="links">
            <a href="https://www.instagram.com/andrij_029?igsh=cmtpOXRmMGVnZ2kz">
            <box-icon name='link-external' color='#00ffee' ></box-icon>
            </a>
            </div>
          </div>

          <div className="testimonial-item">
            <img src="/MyWeb.png" alt="Vasyl" />
            <h2>About Vasyl</h2>
            <p>
              MyWeb je stránka, na které se právě nacházíme. Byla vytvořena
              pomocí frameworku React.js, avšak s využitím nástroje WebPack
              místo Vite.
            </p>
            <div className="links">
            <a href="https://www.instagram.com/andrij_029?igsh=cmtpOXRmMGVnZ2kz">
            <box-icon name='link-external' color='#00ffee' ></box-icon>
            </a>
            </div>
            
          </div>

          <div className="testimonial-item">
            <img src="/Webfinity.png" alt="Vasyl" />
            <h2>Webfinity</h2>
            <p>
              Webfinity je tzv. "vanilla" stránka zaměřená na prodej webových
              stránek, která byla vytvořena pomocí HTML, CSS a JavaScriptu bez
              použití jakéhokoli frameworku.
            </p>
            <div className="links">
            <a href="https://www.instagram.com/andrij_029?igsh=cmtpOXRmMGVnZ2kz">
            <box-icon name='link-external' color='#00ffee' ></box-icon>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Projects;
