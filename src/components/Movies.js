import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import classes from './Movies.module.css';
//import SearchData from './SearchData';


const Movies = () => {
  const [movies, setMovies] = useState("")  

    useEffect(() => {
      const headers = {
        Accept: "application/json",
        Authorization: "Bearer daNXH8aks1JeT2dEenRY",
      };
      const fetchData = async () => {
        try {
          const response = await axios.get("https://the-one-api.dev/v2/movie", {
            headers: headers,
          });

          setMovies(response.data.docs);
          console.log(response.data.docs);
        } catch (error) {
          console.log("Error: " + error);
        }  
      };
      fetchData();
    }, []);

if (!movies) {
    return <div>Loading...</div>;
}
    return (
      <ul className={classes.olWrapper}>
        {movies.map(({ _id, name, academyAwardWins }, index) => (

          <li className={classes.liSort} key={_id}>
            <Link to={`/details/${_id}`}>
              <div>{index}</div>
              <div>Name of the Movie : {name}</div>
              <div>Academy Awards : {academyAwardWins}</div>
            </Link>
          </li>
          
        ))}
      </ul>
    );
}

export default Movies



        //   datas.docs[Math.floor(Math.random() * datas.docs.length)];
        // setQuote(resQuote.dialog);

      