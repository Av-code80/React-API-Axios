import React, {useState} from 'react'
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import DB from '../API/DB';
import classes from './Rating.module.css'


const Rating = ({rate, idMovieRating}) => {
const [ratingStar, setRatingStar] = useState(rate)
console.log(rate, idMovieRating); 

    const changeRate = (star) => {      // patch applique des modifications partielles à une ressource
        
        DB.patch(`/movies/${idMovieRating}`, { // settting id is needed in patch request

            rate: star                      //change rate to star

        }).then(() => {
            setRatingStar(star)
        })
    };


    return (
        <div className={classes.rating}>

            {[1, 2, 3, 4, 5].map((star, index) => {

                if (ratingStar >= index + 1) {
                 
                  return (
                    <AiTwotoneStar
                      className={classes.ratingColor}
                      onClick={() => changeRate(star)}
                      key={index}
                    />
                  );
                }   
                return <AiOutlineStar onClick={() => changeRate(star)} key={index} />
                           
})}
        </div>
    )
}

export default Rating
