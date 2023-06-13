import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Movie({ movie, setModal, setOneMovie }) {
  const { t } = useTranslation()
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => {
        setModal(true);
        setOneMovie(movie);
      }}
      className="card"
    >
      <div className="img">
        <img src={movie.backdrop_path} alt="" />
      </div>
      <div>
        <h2 className="movie-title">{movie.title}</h2>

        {t("haqida.1")}

        {/* Far Stroy Group kompaniyasi, odamlarga baxt, quvonch va farovonlik olib kelish uchun yaratilgan noyob ko'chmas mulk ob'ektlarini yaratish uchun fikr va ruh
        birligi bilan birlashgan yagona oilaga aylangan professionallar jamoasi! */}
      </div>
    </motion.div>
  );
}

export default Movie;
