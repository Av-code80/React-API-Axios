import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
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
        // const datas = await response.data;

        // const resQuote =
        //   datas.docs[Math.floor(Math.random() * datas.docs.length)];
        // setQuote(resQuote.dialog);

        //   const secondResponse = await axios.get(
        //     "https://the-one-api.dev/v2/character?name!=Frodo" + resQuote.character,
        //     {
        //       headers: headers,
        //     }
        //   );
        //   const characters = await secondResponse.data;
        //   console.log(secondResponse.data);

        //   const resCharacter = characters.docs[0];
        //   setCharacter(resCharacter.name);
        // } catch (error) {
        //   console.log("Error of Quote" + error);
        //   console.log("Error of Character" + error);
        // }
      };
      fetchData();
    }, []);

if (!movies) {
    return <div>Loading</div>;
}
    return (
      <ul>
        {movies.map(({ _id, name }, index) => (
          <li key={_id}>

            <Link  to={`/details/${_id}`}>
              {name}
              {index}
            </Link>

          </li>
        ))}
      </ul>
    );
}

export default Movies
