import React from 'react';

const Education = () => {
    return (
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
    );
}

export default Education;
