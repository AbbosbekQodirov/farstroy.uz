import "./Header.css";
import { motion } from "framer-motion";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { BiArrowToTop } from "react-icons/bi";
import { useTranslation } from "react-i18next";
function Header() {
  const { t, i18n } = useTranslation();
  const site_nav = document.querySelector(".site_nav");
  const scrollBtn = document.querySelector(".scrollToTop-btn");
  window.addEventListener("scroll", () => {
    site_nav.classList.toggle("active", window.scrollY > 100);
    scrollBtn.classList.toggle("active", window.scrollY > 300);
  });

  //to top btn//

  const [menu, setMenu] = useState(false);
  function showMenu() {
    setMenu(true);
  }
  function hideMenu() {
    setMenu(false);
  }

  function navClick(e) {
    if (e.target.classList.contains("navbar")) {
      hideMenu();
    }
    // console.log(e.target.classList);
  }

  return (
    <div className="Header" id="header">
      <div
        class="scrollToTop-btn"
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
      >
        <BiArrowToTop />
      </div>
      <div className="container header-container">
        {menu && (
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="navbar"
            onClick={(e) => {
              navClick(e);
            }}
          >
            <motion.div
              // initial={{ x: -200, opacity: 0 }}
              // whileInView={{ x: 0, opacity: 1 }}
              // transition={{ delay: 0.3 }}
              className="bar"
            >
              <div className="exit">
                <BsChevronDoubleLeft onClick={hideMenu} />
              </div>
              <div className="nav_language">
                <button onClick={()=>{
                  hideMenu()
                  i18n.changeLanguage("en");
                }}>Eng</button>
                <button onClick={()=>{
                  hideMenu()
                  i18n.changeLanguage("ru");
                }}>Ru</button>
                <button onClick={()=>{
                  hideMenu()
                  i18n.changeLanguage("uz");
                }}>Uz</button>
              </div>
              <ul>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  onClick={hideMenu}
                >
                  <a href="#">{t("web.1")}</a>
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={hideMenu}
                >
                  <a href="#kvartira">{t("web.2")}</a>
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={hideMenu}
                >
                  <a href="#ourHous">{t("web.3")}</a>
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={hideMenu}
                >
                  <a href="#haqida">{t("web.4")}</a>
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={hideMenu}
                >
                  <a href="#contact">{t("web.5")}</a>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
        <div className="site_nav">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="menu"
            onClick={showMenu}
          >
            <BiMenuAltLeft />
          </motion.div>
          <ul className="social">
            <li>
              <a style={{ fontWeight: "bold" }} href="tel:+998907775577">
                +998-90-777-55-77
              </a>
            </li>
            <li>
              <a className="social_connect" href="https://t.me/farstroygroup">
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a
                className="social_connect"
                href="https://www.instagram.com/farstroygroup/"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                className="social_connect"
                href="https://www.facebook.com/farstroygroup"
              >
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
        <motion.div
          className="header_img"
          // layout
          // animate={{ opacity: 1, scale: 1 }}
          initial={{ x: -700, bottom: 0, opacity: 0 }}
          whileInView={{ x: -16, bottom: 0, opacity: 1 }}
          // exit={{ opacity: 0, scale: 0 }}
          // transition={{ duration: 0.4 }}
        >
          {/* <img
            src="./assets/images/2_2_-__д___В__-removebg-preview.png"
            alt=""
          /> */}
        </motion.div>
        <motion.div
          // layout
          initial={{ y: -500, opacity: 0 }}
          whileInView={{ y: -70, opacity: 1 }}
          // exit={{ opacity: 0, scale: 0 }}
          transition={{ delay: 0.3 }}
          className="logo"
        >
          <img id="logo" src="./assets/images/blacklogo.png" alt="" />
          <img id="logo_menu" src="./assets/images/blacklogo.png" alt="" />
        </motion.div>
        {/* <motion.img
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          // exit={{ opacity: 0, scale: 0 }}
          transition={{ delay: 0.2 }}
          className="header_img2"
          src="./assets/images/2_1 - Photo.png"
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default Header;
