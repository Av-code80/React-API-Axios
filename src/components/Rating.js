import React, { useState } from "react";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import DB from "../API/DB";
import classes from "./Rating.module.css";


const Rating = ({ rate, idMovieRating }) => {
  const [ratingStar, setRatingStar] = useState(rate);
 //console.log(rate, idMovieRating);

   const changeRate = async (star) => {
     const response = await DB.get(`/movies/${idMovieRating}`);
     if (response.data.rate === star) {
       star = star - 1;
     }

     DB.patch(`/movies/${idMovieRating}`, {
       // settting id is needed in patch request
       rate: star, //change rate to star
     }).then(() => {
       setRatingStar(star);
     });
   };

  return (
    <div className={classes.rating}>
      {[1, 2, 3, 4, 5].map((stared, index) => { console.log(ratingStar);
        if (ratingStar >= index + 1) {
          return (
            <AiTwotoneStar className={classes.ratingColor} onClick={() => changeRate(stared)}
              key={index}/>
          );
        }
        return <AiOutlineStar onClick={() => changeRate(stared)} key={index} />;
      })}
    </div>
  );
};

export default Rating;
