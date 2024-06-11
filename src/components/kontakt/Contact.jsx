import React from "react";

const Contact = () => {
  return (
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
  );
};

export default Contact;
