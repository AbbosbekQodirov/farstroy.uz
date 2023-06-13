import React from "react";
import Iframe from "react-iframe";
import { motion } from "framer-motion";
import {
  BsFacebook,
  BsFillTelephoneOutboundFill,
  BsInstagram,
  BsTelegram,
  BsYoutube,
  BsJournalBookmarkFill
} from "react-icons/bs";
import { FaFacebook, FaTelegramPlane, FaTiktok, FaGlobe } from "react-icons/fa";
import { GrDomain, GrContact } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineOtherHouses } from "react-icons/md";
import { BiImages } from "react-icons/bi";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="container">
        <div className="site_footer" id="contact">
          <div className="maps">
            <div
              style={{
                width: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <a
                href="https://yandex.com/maps/10336/phergana/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "0px",
                }}
              >
                Phergana
              </a>
              <a
                href="https://yandex.com/maps/10336/phergana/?from=mapframe&ll=71.761728%2C40.396046&mode=routes&rtext=40.395846%2C71.760537&rtt=auto&ruri=&source=mapframe&utm_medium=mapframe&utm_source=maps&z=18.6"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "14px",
                }}
              >
                Yandex Maps
              </a>
              <Iframe
                className="iframemap"
                src="https://yandex.com/map-widget/v1/?from=mapframe&ll=71.761728%2C40.396046&mode=routes&rtext=40.395846%2C71.760537&rtt=auto&ruri=&source=mapframe&utm_source=mapframe&z=12"
                height="400"
                frameborder="1"
                allowfullscreen="true"
                style="position:relative;"
              ></Iframe>
            </div>
            {/* <div>
              <Iframe
                className="iframemap"
                src="https://yandex.com/map-widget/v1/?from=mapframe&ll=71.785774%2C40.403475&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNDk0MjM2EixPyrt6YmVraXN0b24sIEZhcmfKu29uYSwgS2ljaGlrIGhhbHFhIHlvyrtsaSIKDU6Sj0IVPp0hQg%2C%2C&z=12"
                height="400"
                frameborder="1"
                allowfullscreen="true"
                style="position:relative;"
              ></Iframe>
            </div> */}
          </div>
          <div className="footer_info">
            <div className="footer_img">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                src="./assets/images/blacklogo.svg"
                alt=""
              />
            </div>
            <div>
              <ul>
                <h2>{t("footer.call")}</h2>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <a href="tel:+998910775577">
                    <BsFillTelephoneOutboundFill className="footer_icon tell_icon" />
                    +998907775577 <br /> +998910775577
                  </a>
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <a href="https://www.facebook.com/farstroygroup">
                    <FaFacebook class="footer_icon" />
                    Facebook
                  </a>
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <a href="mailto:farstroygr@gmail.com">
                    <AiOutlineMail className="footer_icon" />
                    Email
                  </a>
                </motion.li>
              </ul>
            </div>
            <div>
              <ul>
                <h2>{t("footer.message")}</h2>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <a href="https://t.me/farstroygroup">
                    <FaTelegramPlane class="footer_icon" />
                    Telegram
                  </a>
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <a href="https://www.instagram.com/farstroygroup/">
                    <BsInstagram class="footer_icon" />
                    Instagram
                  </a>
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <a href="">
                    <BsYoutube class="footer_icon" />
                    You tube
                  </a>
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <a href="">
                    <FaTiktok class="footer_icon" />
                    Tik tok
                  </a>
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <a href="http://farstroy.uz/">
                    <FaGlobe class="footer_icon" />
                    Farstroy.uz
                  </a>
                </motion.li>
              </ul>
            </div>
            <div>
              <ul>
                <h2>{t("footer.webpage")}</h2>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <a href="#">
                    <GrDomain class="footer_icon" />
                    {t("web.1")}
                  </a>
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <a href="#kvartira">
                    <BiImages class="footer_icon" />
                    {t("web.2")}
                  </a>
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <a href="#ourHous">
                    <MdOutlineOtherHouses class="footer_icon" />
                  </a>
                  {t("web.3")}
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <a href="#haqida">
                    <BsJournalBookmarkFill class="footer_icon" />
                    {t("web.4")}
                  </a>
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <a href="#contact">
                    <GrContact class="footer_icon" />
                    {t("web.5")}
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
