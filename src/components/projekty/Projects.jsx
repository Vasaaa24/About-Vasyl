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
            <img src="/MyWeb.png" alt="Vasyl" />
            <h2>About Vasyl</h2>
            <p>
              MyWeb je stránka, na které se právě nacházíme. Byla vytvořena
              pomocí frameworku React.js, avšak s využitím nástroje WebPack
              místo Vite.
            </p>
            <div className="links">
              <a href="https://about-vasyl.vercel.app/">
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
