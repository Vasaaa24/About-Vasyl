import React from "react";

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
              Grad Read je projekt o maturitní četbě, vytvořený pomocí moderního
              frameworku React.js ve spolupráci s nástrojem Vite, který umožňuje
              rychlý a efektivní vývoj webových aplikací.
            </p>
            <div className="links">
              <a href="https://grad-read.vercel.app/">
                <box-icon name="link-external" color="#00ffee"></box-icon>
              </a>
            </div>
          </div>

          <div className="testimonial-item">
            <img src="/Webfinity.png" alt="Vasyl" />
            <h2>Webfinity</h2>
            <p>
              Webfinity je webshop vytvořený pomocí React.js a WebPacku, což
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
            <img src="/Repository.png" alt="Vasyl" />
            <h2>All projects</h2>
            <p>
              Zde naleznete různé projekty na mém GitHubu, každý s odlišným
              zaměřením a účelem. Prozkoumejte je a objevte různorodé
              technologie a přístupy, které používám.
            </p>
            <div className="links">
              <a href="https://github.com/Vasaaa24?tab=repositories">
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
