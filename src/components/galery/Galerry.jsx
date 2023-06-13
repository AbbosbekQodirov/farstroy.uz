
    import React, { useEffect, useState } from "react";
    import Filter from "./Filter";
    import "./Galery.css";
    import Movie from "./Movie";
    import { motion, AnimatePresence } from "framer-motion";
    // import Movie from './Movie';

    


    function Galerry() {
      const [pindex, setPindex] = useState(0);
      const [popular, setPopular] = useState([
        {
          backdrop_path: "/assets/images/PREMIUM HOUSE 2.jpg",
          title: "Premium House",
          id: 0,
        },
        {
          backdrop_path: "/assets/images/PREMIUM HOUSE 3.jpg",
          title: "Bizning ishlar",
          id: 1,
        },
        {
          backdrop_path: "/assets/images/PREMIUM HOUSE 4.jpg",
          title: "Infratuzilmalar",
          id: 2,
        },
        {
          backdrop_path: "/assets/images/PREMIUM HOUSE 5.jpg",
          title: "Afzalliklar",
          id: 3,
        },
      ]);
      // const [filtered, setFiltered] = useState([]);
      // const [activeGenre, setActiveGenre] = useState(0);
      // const [modal, setModal] = useState(false);
      const [oneMovie, setOneMovie] = useState([]);

      const [index, setIndex] = useState(0)
      function changePopular(e) {
        if (e.target.classList.contains('one')) {
          setIndex(0)
          setPopular([
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 2.jpg",
              title: "Premium House",
              id: 0,
            },
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 3.jpg",
              title: "Bizning ishlar",
              id: 1,
            },
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 4.jpg",
              title: "Infratuzilmalar",
              id: 2,
            },
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 5.jpg",
              title: "Afzalliklar",
              id: 3,
            }
          ]);
        } else if (e.target.classList.contains("two")) {
          setIndex(1);
          setPopular([
            {
              backdrop_path: "/assets/images/elitehouse1.jpg",
              title: "Elite House",
              id: 0,
            },
            {
              backdrop_path: "/assets/images/elitehouse2.jpg",
              title: "Bizning ishlar",
              id: 1,
            },
            {
              backdrop_path: "/assets/images/elitehouse3.jpg",
              title: "Infratuzilmalar",
              id: 2,
            },
            {
              backdrop_path: "/assets/images/elitehouse4.jpg",
              title: "Afzalliklar",
              id: 3,
            },
          ]);
        } else if (e.target.classList.contains("three")) {
          setIndex(2);
          setPopular([
            {
              backdrop_path: "/assets/images/cottage1.jpg",
              title: "Cottage",
              id: 0,
            },
            {
              backdrop_path: "/assets/images/cottage2.jpg",
              title: "Bizning ishlar",
              id: 1,
            },
            {
              backdrop_path: "/assets/images/cottage3.jpg",
              title: "Infratuzilmalar",
              id: 2,
            },
            {
              backdrop_path: "/assets/images/cottage4.jpg",
              title: "Afzalliklar",
              id: 3,
            },
          ]);
        } else if (e.target.classList.contains("four")) {
          setIndex(3);
          setPopular([
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 2.jpg",
              title: "Office",
              id: 0,
            },
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 3.jpg",
              title: "Bizning ishlar",
              id: 1,
            },
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 4.jpg",
              title: "Infratuzilmalar",
              id: 2,
            },
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 5.jpg",
              title: "Afzalliklar",
              id: 3,
            }
          ]);
        } 
      }

      function selected(){
        const value = document.querySelector("#select").value;
        if (value ==  "Premium") {
          setIndex(0);
          setPopular([
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 2.jpg",
              title: "Premium House",
              id: 0,
            },
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 3.jpg",
              title: "Bizning ishlar",
              id: 1,
            },
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 4.jpg",
              title: "Infratuzilmalar",
              id: 2,
            },
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 5.jpg",
              title: "Afzalliklar",
              id: 3,
            },
          ]);
        } else if (value == "Elite") {
          setIndex(1);
          setPopular([
            {
              backdrop_path: "/assets/images/elitehouse1.jpg",
              title: "Elite House",
              id: 0,
            },
            {
              backdrop_path: "/assets/images/elitehouse2.jpg",
              title: "Bizning ishlar",
              id: 1,
            },
            {
              backdrop_path: "/assets/images/elitehouse3.jpg",
              title: "Infratuzilmalar",
              id: 2,
            },
            {
              backdrop_path: "/assets/images/elitehouse4.jpg",
              title: "Afzalliklar",
              id: 3,
            },
          ]);
        } else if (value == "Cottage") {
          setIndex(2);
          setPopular([
            {
              backdrop_path: "/assets/images/cottage1.jpg",
              title: "Cottage",
              id: 0,
            },
            {
              backdrop_path: "/assets/images/cottage2.jpg",
              title: "Bizning ishlar",
              id: 1,
            },
            {
              backdrop_path: "/assets/images/cottage3.jpg",
              title: "Infratuzilmalar",
              id: 2,
            },
            {
              backdrop_path: "/assets/images/cottage4.jpg",
              title: "Afzalliklar",
              id: 3,
            },
          ]);
        } else if (value == "Office") {
          setIndex(3);
          setPopular([
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 2.jpg",
              title: "Office",
              id: 0,
            },
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 3.jpg",
              title: "Bizning ishlar",
              id: 1,
            },
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 4.jpg",
              title: "Infratuzilmalar",
              id: 2,
            },
            {
              backdrop_path: "/assets/images/PREMIUM HOUSE 5.jpg",
              title: "Afzalliklar",
              id: 3,
            },
          ]);
        }
      }


      return (
        <div className="about">
          <div className="mobileTitle">
            <select name="" id="select" onChange={selected}>
              <option value="Premium">Premium House</option>
              <option value="Elite">Elite House</option>
              <option value="Cottage">Cottage</option>
              <option value="Office">Office</option>
            </select>
          </div>
          <div className="aboutTitle">
            <h2
              className={index == 0 ? "titleItem one active" : "titleItem one"}
              onClick={changePopular}
            >
              Premium House
            </h2>
            <h2
              className={index == 1 ? "titleItem two active" : "titleItem two"}
              onClick={changePopular}
            >
              Elite House
            </h2>
            <h2
              className={
                index == 2 ? "titleItem three active" : "titleItem three"
              }
              onClick={changePopular}
            >
              Cottage
            </h2>
            <h2
              className={
                index == 3 ? "titleItem four active" : "titleItem four"
              }
              onClick={changePopular}
            >
              Office
            </h2>
          </div>
          <hr />
          <Filter
            // popular={popular}
            setPindex={setPindex}
            pindex={pindex}
            // activeGenre={activeGenre}
            // setActiveGenre={setActiveGenre}
          />
          <motion.div layout className="popular-movies">
            <AnimatePresence>
              <Movie
                setOneMovie={setOneMovie}
                // setModal={setModal}
                key={popular[pindex].id}
                movie={popular[pindex]}
              />
            </AnimatePresence>
          </motion.div>
        </div>
      );
    }

    export default Galerry;
