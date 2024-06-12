import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="social">
          <a href="https://github.com/Vasaaa24">
            <box-icon type="logo" name="github"></box-icon>
          </a>
          <a href="https://www.instagram.com/m_andrijash?igsh=MnZlNG0xMDcwZ3pq">
            <box-icon name="instagram-alt" type="logo"></box-icon>
          </a>
          <a href="https://www.facebook.com/vasyl.halychka">
            <box-icon type="logo" name="facebook-circle"></box-icon>
          </a>
          <a href="https://www.jobstack.it/profilepreview">
          <box-icon name='user'></box-icon>
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
        <p className="copyright">Created for portfolio by Vasyl Halyčka</p>
      </footer>
    );
}

export default Footer;
