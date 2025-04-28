import React from 'react';

const Skills = () => {
    return (
        <section className="services" id="services">
        <h2 className="heading">Skills</h2>
        <div className="services-container">
          <div className="service-box">
            <div className="service-info">
              <h4>Webstack</h4>
              <p>
                Umím pracovat s HTML, CSS, SCSS, Bootstrap a JavaScript. HTML využívám k
                definování struktury stránek, CSS k formátování vzhledu, SCSS k
                efektivnějšímu psaní stylů a JavaScript k přidání interaktivity.
                Díky těmto dovednostem jsem schopen vytvářet moderní a dynamické
                webové stránky.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-info">
              <h4>Frameworks</h4>
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
    );
}

export default Skills;
