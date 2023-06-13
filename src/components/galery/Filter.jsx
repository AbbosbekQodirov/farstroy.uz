import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
function Filter({ setPindex, pindex }) {
  // useEffect(() => {
  //   const filtered = popular.filter((movie) => movie.id == activeGenre);
  //   setFiltered(filtered);
  // }, [activeGenre]);
  const { t } = useTranslation();

  return (
    <div className="filter-container">
      <button
        className={pindex === 0 ? "active" : ""}
        onClick={() => {
          setPindex(0);
        }}
      >
        {t("filter.1")}
      </button>
      <button
        className={pindex === 1 ? "active" : ""}
        onClick={() => {
          setPindex(1);
        }}
      >
        {t("filter.2")}
      </button>
      <button
        className={pindex === 2 ? "active" : ""}
        onClick={() => {
          setPindex(2);
        }}
      >
        {t("filter.3")}
      </button>
      <button
        className={pindex === 3 ? "active" : ""}
        onClick={() => {
          setPindex(3);
        }}
      >
        {t("filter.4")}
      </button>
    </div>
  );
}

export default Filter;
