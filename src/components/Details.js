import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Details = (props) => {
  const [movie, setMovie] = useState("");
  const [quote, setQuote] = useState("");
  const [characters, setCharacters] = useState("");

   // data source
  const { id: movieId } = props.match.params;
  
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer daNXH8aks1JeT2dEenRY",
  };
  useEffect(() => {

    (async function () {
       try {
         const response = await axios.get(
           `https://the-one-api.dev/v2/movie/${movieId}`,
           { headers: headers }
         );
         setMovie(response.data.docs[0])
        // console.log(response.data.docs[0].name);
       } catch (error) {
        console.log("Error quote: " + error);
       } 
      try {       
        const response = await axios.get(`https://the-one-api.dev/v2/movie/${movieId}/quote`,
          { headers: headers }       
        );
        //console.log(response);
            setQuote(response.data.docs)
         // console.log(response.data.docs);
        } catch (error) {
        console.log("Error quote: " + error);
      } 
      try {
        const response = await axios.get(`https://the-one-api.dev/v2/character`,
          { headers: headers } 
        );                        
        setCharacters(response.data.docs);
        console.log(response.data.docs);
      } 
      catch (error) {
        console.log("Error character: " + error);
      } 
    })();
  }, []);


  if (!quote || !characters) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Link to="/">Home</Link>
      <div>{movie.name}</div> {/* <div>{JSON.stringify(movie.name)}</div> */}
      <ul>
        {quote.map(({ dialog, _id }, index) => {
          if (index > 10) return;
          return <li key={_id}>{dialog}</li>;
        })}
      </ul>
      <ul>
        {characters.map(({ character, _id }, index) => {
          if (index > 2) return;
          return <div key={_id}>{JSON.stringify(character)}</div>;
        })}
      </ul>
    </>
  );
      };

export default Details
