import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Row = ({ rowID, title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <AiOutlineLeft
          onClick={slideLeft}
          className=" left-0 bg-gradient-to-r from-[#19191a] h-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={80}
          color="#fff"
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, i) => (
            <Movie item={item} key={i} />
          ))}
        </div>
        <AiOutlineRight
          onClick={slideRight}
          className=" right-0 bg-gradient-to-l from-[#19191a] h-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={80}
          color="#fff"
        />
      </div>
    </>
  );
};

export default Row;
