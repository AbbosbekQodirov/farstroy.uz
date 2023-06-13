import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Main.css";

import Carusel from "../../components/Carusel";
import Galerry from "../../components/galery/Galerry";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowRightCircle } from "react-icons/bs";
import { useTranslation } from "react-i18next";
function Main() {
  const { t, i18n } = useTranslation();
  const [picture, setPicture] = useState([]);
  const [text, setText] = useState([]);
  const [alb, setAlb] = useState([]);
  const [id, setId] = useState(0);
  useEffect(() => {
    fetch("https://farstroy.pythonanywhere.com/karyusellar/")
      .then((res) => res.json())
      .then((data) => setPicture(data))
      .catch((err) => console.log("xato", err.message));
    fetch("https://farstroy.pythonanywhere.com/kataloglar/")
      .then((res) => res.json())
      .then((data) => setText(data))
      .catch((err) => console.log(err));
    fetch("https://farstroy.pythonanywhere.com/bizning_uylar/")
      .then((res) => res.json())
      .then((data) => setAlb(data))
      .catch((err) => console.log("Xatolik", err.message));
  }, []);
  const [modal, setModal] = useState(false);
  const [oneHouse, setOneHouse] = useState([]);

  function navClick(e) {
    if (e.target.classList.contains("active")) {
      setModal(false);
    }
    // console.log(e.target.classList);
  }

  const images = [
    {
      original: "/assets/picture/1.1.jpg",
      thumbnail: "/assets/picture/1.1.jpg",
    },
    {
      original: "/assets/picture/1.2.jpg",
      thumbnail: "/assets/picture/1.2.jpg",
    },
    {
      original: "/assets/picture/1.3.jpg",
      thumbnail: "/assets/picture/1.3.jpg",
    },
    {
      original: "/assets/picture/1.9.jpg",
      thumbnail: "/assets/picture/1.9.jpg",
    },
    {
      original: "/assets/picture/1_21.jpg",
      thumbnail: "/assets/picture/1_21.jpg",
    },
    {
      original: "/assets/picture/11.jpg",
      thumbnail: "/assets/picture/11.jpg",
    },
    {
      original: "/assets/picture/12.jpg",
      thumbnail: "/assets/picture/12.jpg",
    },
    {
      original: "/assets/picture/7 (1).jpg",
      thumbnail: "/assets/picture/7 (1).jpg",
    },
    {
      original: "/assets/picture/6.jpg",
      thumbnail: "/assets/picture/6.jpg",
    },
  ];
  const sliderImgs = picture.map((item) => {
    return {
      original: `https://farstroy.pythonanywhere.com/${item.rasm}`,
    };
  });
  const [haus, setHaus] = useState([
    {
      backdrop_path: "/assets/images/PREMIUM HOUSE 2.jpg",
      drawing: "/assets/images/chizma1.jpg",
      title: "Premium House",
      desc: t("des"),
      id: 0,
      address: t("card.city"),
      date: "12.10.2023",
      place: "(dan) 52.59 (gacha) 198,03 м²",
    },
    {
      backdrop_path: "/assets/images/PREMIUM HOUSE 3.jpg",
      drawing: "/assets/images/chizma1.jpg",
      title: "Premium House",
      desc: t("des"),
      desc: `${i18n.language === "en" ? "Uzbek" : "O'xshadi"}`,
      id: 1,
      address: t("card.city"),

      date: "12.10.2023",
      place: "(dan) 52.59 (gacha) 198,03 м²",
    },
    {
      backdrop_path: "/assets/images/PREMIUM HOUSE 4.jpg",
      drawing: "/assets/images/chizma1.jpg",
      title: "Premium House",
      desc: t("des"),
      // desc: "Majmuani loyihalashda hududdagi seysmik vaziyatni hisobga olgan holda eng yangi arxitektura, muhandislik va texnologik yechimlardan foydalanilgan, qurilishda temir armaturani uzluksiz monolit quyish bo‘yicha ilg‘or texnologiya qo‘llanilgan bo‘lib, u qattiq, ammo egiluvchanlikni ta’minlaydi.",
      id: 2,
      address: t("card.city"),

      date: "12.10.2023",
      place: "(dan) 52.59 (gacha) 198,03 м²",
    },
    {
      backdrop_path: "/assets/images/PREMIUM HOUSE 5.jpg",
      drawing: "/assets/images/chizma1.jpg",
      title: "Premium House",
      desc: t("des"),
      // desc: "Majmuani loyihalashda hududdagi seysmik vaziyatni hisobga olgan holda eng yangi arxitektura, muhandislik va texnologik yechimlardan foydalanilgan, qurilishda temir armaturani uzluksiz monolit quyish bo‘yicha ilg‘or texnologiya qo‘llanilgan bo‘lib, u qattiq, ammo egiluvchanlikni ta’minlaydi.",
      id: 3,
      address: t("card.city"),

      date: "12.10.2023",
      place: "(dan) 52.59 (gacha) 198,03 м²",
    },
    {
      backdrop_path: "/assets/images/PREMIUM HOUSE 6.jpg",
      drawing: "/assets/images/chizma1.jpg",
      title: "Premium House",
      desc: t("des"),
      // desc: "Majmuani loyihalashda hududdagi seysmik vaziyatni hisobga olgan holda eng yangi arxitektura, muhandislik va texnologik yechimlardan foydalanilgan, qurilishda temir armaturani uzluksiz monolit quyish bo‘yicha ilg‘or texnologiya qo‘llanilgan bo‘lib, u qattiq, ammo egiluvchanlikni ta’minlaydi.",
      id: 4,
      address: t("card.city"),

      date: "12.10.2023",
      place: "(dan) 52.59 (gacha) 198,03 м²",
    },
    {
      backdrop_path: "/assets/images/PREMIUM HOUSE 6.jpg",
      drawing: "/assets/images/chizma1.jpg",
      title: "Premium House",
      desc: t("des"),
      // desc: "Majmuani loyihalashda hududdagi seysmik vaziyatni hisobga olgan holda eng yangi arxitektura, muhandislik va texnologik yechimlardan foydalanilgan, qurilishda temir armaturani uzluksiz monolit quyish bo‘yicha ilg‘or texnologiya qo‘llanilgan bo‘lib, u qattiq, ammo egiluvchanlikni ta’minlaydi.",
      id: 5,
      address: t("card.city"),

      date: "12.10.2023",
      place: "(dan) 52.59 (gacha) 198,03 м²",
    },
    {
      backdrop_path: "/assets/images/PREMIUM HOUSE 6.jpg",
      drawing: "/assets/images/chizma1.jpg",
      title: "Premium House",
      desc: t("des"),
      desc: "Majmuani loyihalashda hududdagi seysmik vaziyatni hisobga olgan holda eng yangi arxitektura, muhandislik va texnologik yechimlardan foydalanilgan, qurilishda temir armaturani uzluksiz monolit quyish bo‘yicha ilg‘or texnologiya qo‘llanilgan bo‘lib, u qattiq, ammo egiluvchanlikni ta’minlaydi.",
      id: 6,
      address: t("card.city"),
      date: "12.10.2023",
      place: "(dan) 52.59 (gacha) 198,03 м²",
    },
    {
      backdrop_path: "/assets/images/PREMIUM HOUSE 6.jpg",
      drawing: "/assets/images/chizma1.jpg",
      title: "Premium House",
      desc: t("des"),
      // desc: "Majmuani loyihalashda hududdagi seysmik vaziyatni hisobga olgan holda eng yangi arxitektura, muhandislik va texnologik yechimlardan foydalanilgan, qurilishda temir armaturani uzluksiz monolit quyish bo‘yicha ilg‘or texnologiya qo‘llanilgan bo‘lib, u qattiq, ammo egiluvchanlikni ta’minlaydi.",
      id: 7,
      address: t("card.city"),

      date: "12.10.2023",
      place: "(dan) 52.59 (gacha) 198,03 м²",
    },
  ]);

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero_info">
            <div>
              <h1>{t("title.text")}</h1>
              <div className="btn btn-3">
                <a href="#batafsil">
                  <span>{t("btn.text")}</span>
                </a>
              </div>
            </div>

            <div>
              <Carusel
                images={sliderImgs}
                showbar={false}
                showNav={false}
                showBullets={true}
              />
            </div>
            <div id="kvartira"></div>
          </div>
        </div>
        <Galerry />
        <h1 className="hauses_title">
          <span>- Far Stroy Group -</span> <br /> <div style={{textTransform: "uppercase"}}>{t("premium")}</div>
        </h1>
        <div className="container">
          <Carusel
            images={images}
            showbar={true}
            showNav={true}
            showBullets={false}
          />
        </div>
      </div>
      <div className="our_houses" id="batafsil">
        <h1 className="hauses_title">{t("house")}</h1>

        <ul className="hauses" id="ourHous">
          {text.map((item, index) => {
            return (
              <motion.li
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="cards"
              >
                <div className="item">
                  <div className="li_img">
                    <img
                      src={`https://farstroy.pythonanywhere.com/${item.loyiha_haqida_rasm}`}
                      alt=""
                    />
                  </div>
                  <h2>
                    {i18n.language === "en"
                      ? item.nom_ingliz.substr(0, 100)
                      : i18n.language === "uz"
                      ? item.nom_uz.substr(0, 100)
                      : item.nom_rus.substr(0, 100)}
                  </h2>
                  <p className="txt">
                    {i18n.language === "en"
                      ? item.loyiha_haqida_ingliz.substr(0, 100)
                      : i18n.language === "uz"
                      ? item.loyiha_haqida_uz.substr(0, 100)
                      : item.loyiha_haqida_rus.substr(0, 100)}
                    ...
                  </p>

                  <div
                    className="btn2 btn-7"
                    onClick={() => {
                      setModal(true);
                      setOneHouse(item);
                      setId(item.id);
                    }}
                  >
                    <span>{t("card.more")}</span>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>

        {alb.map((item) => {
          if (item.id === id) {
            console.log(item);
            return (
              <div
                className={modal === true ? "info active" : "info"}
                onClick={(e) => {
                  navClick(e);
                }}
              >
                <div className="movie_info">
                  <div
                    onClick={() => {
                      setModal(false);
                    }}
                    className="exit"
                  >
                    <BsArrowRightCircle />
                  </div>

                  <div className="info-img">
                    <img
                      src={`https://farstroy.pythonanywhere.com${item.rasm}`}
                      alt="salom"
                    />
                    <div className="content">
                      <div className="sotuv">
                        {i18n.language === "en"
                          ? item.nom_ingliz
                          : i18n.language === "uz"
                          ? item.nom_uz
                          : item.nom_rus}
                      </div>
                      <div className="sotuv">{`${item.shahar}`}</div>
                      <div className="sotuv">
                        {item.sotuvda_bor ? t("card.mar") : t("sotuv.1")}
                      </div>
                    </div>
                  </div>
                  <div className="info-text">
                    <h1>{t(`${item.nom_uz}`)}:</h1>
                    <div className="content">
                      <div>
                        <p>{t("kenglik")}:</p>
                      </div>
                      <div>
                        <p>{item.kenglik}</p>
                      </div>
                    </div>
                    <div className="content">
                      <div>
                        <p>{t("kirish")}:</p>
                      </div>
                      <div>
                        <p>{item.kirish}</p>
                      </div>
                    </div>
                    <div className="content">
                      <div>
                        <p>{t("mehmonxona")}:</p>
                      </div>
                      <div>
                        <p>{item.mehmonxona}</p>
                      </div>
                    </div>
                    <div className="content">
                      <div>
                        <p>{t("oshxona")}:</p>
                      </div>
                      <div>
                        <p>{item.oshxona}</p>
                      </div>
                    </div>

                    <div className="content overview">{oneHouse.desc}</div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Main;
