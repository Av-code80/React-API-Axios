import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//import useLord from '../hooks/useLord';


const Details = (props) => {
  const [movie, setMovie] = useState("");
  const [quote, setQuote] = useState("");
  const [characters, setCharacters] = useState("");
  
  const { id: movieId } = props.match.params;

   //data source
  useEffect(() => {
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer daNXH8aks1JeT2dEenRY",
    };

    (async function () {
      try {
        const response = await axios.get(
          `https://the-one-api.dev/v2/movie/${movieId}`,
          { headers: headers }
        );
        setMovie(response.data.docs[0]);
        // console.log(response.data.docs[0].name);
      } catch (error) {
        console.log("Error quote: " + error);
      }
      try {
        const response = await axios.get(
          `https://the-one-api.dev/v2/movie/${movieId}/quote`,
          { headers: headers }
        );
        //console.log(response);
        setQuote(response.data.docs);
        // console.log(response.data.docs);
      } catch (error) {
        console.log("Error quote: " + error);
      }
      try {
        const response = await axios.get(
          `https://the-one-api.dev/v2/character`,
          { headers: headers }
        );
        setCharacters(response.data.docs);
        //console.log(response.data.docs);
      } catch (error) {
        console.log("Error character: " + error);
      }
    })();
  }, [movieId]);

  if (!quote || !characters) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <Link to="/">Home</Link>

      <div>{movie.docs[0].name}</div>
      <ul>
        {quote.docs.map(({ dialog, _id }, index) => {
          if (index > 10) return false;
          return <li key={_id}>{dialog}</li>;
        })}
      </ul>
      <ul>
        {characters.map(({ _id, name }, index) => {
          if (index > 10) return false;
          return <div key={_id}>{name}</div>;
        })}
      </ul>
    </>
  );
      };

export default Details

    
 {/* <div>{JSON.stringify(movie.name)}</div> */}
      {/* 
      */}
    

//       import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// //import useLord from '../hooks/useLord';


// const Details = (props) => {
//   const [movie, setMovie] = useState("");
//   const [quote, setQuote] = useState("");
//   const [characters, setCharacters] = useState("");
  
//   const { id: movieId } = props.match.params;

//   const [ loadingMovie, resultMovie, errorMovie ] = useLord(`movie/${movieId}`);
//   const [ loadingQuote, resultQuote, errorQuote ] = useLord(`movie/${movieId}/quote`);
//   const [ loadingCharacter, resultCharacter, errorCharacter ] = useLord("character");

//   console.log(loadingMovie);

//    // data source
//   //useEffect(() => {
//     // const headers = {
//     //   Accept: "application/json",
//     //   Authorization: "Bearer daNXH8aks1JeT2dEenRY",
//     // };

//   //   (async function () {
//   //     try {
//   //       const response = await axios.get(
//   //         `https://the-one-api.dev/v2/movie/${movieId}`,
//   //         { headers: headers }
//   //       );
//   //       setMovie(response.data.docs[0]);
//   //       // console.log(response.data.docs[0].name);
//   //     } catch (error) {
//   //       console.log("Error quote: " + error);
//   //     }
//   //     try {
//   //       const response = await axios.get(
//   //         `https://the-one-api.dev/v2/movie/${movieId}/quote`,
//   //         { headers: headers }
//   //       );
//   //       //console.log(response);
//   //       setQuote(response.data.docs);
//   //       // console.log(response.data.docs);
//   //     } catch (error) {
//   //       console.log("Error quote: " + error);
//   //     }
//   //     try {
//   //       const response = await axios.get(
//   //         `https://the-one-api.dev/v2/character`,
//   //         { headers: headers }
//   //       );
//   //       setCharacters(response.data.docs);
//   //       //console.log(response.data.docs);
//   //     } catch (error) {
//   //       console.log("Error character: " + error);
//   //     }
//   //   })();
//   // }, [movieId]);

//   // if (!quote || !characters) {
//   //   return <div>Loading...</div>;
//   // }


// //   console.log(resultMovie, resultMovie.length);
// // if (!loadingQuote || !loadingCharacter || !loadingMovie) {
// //   return <div>Loading...</div>;
// // }

//   // if ((resultMovie.length == 1)) return "Loading";
//   //console.log(resultMovie.length);
//   console.log(resultQuote);
//   if (!resultMovie.hasOwnProperty("docs") || !resultQuote.hasOwnProperty("docs") 
//   || !resultCharacter.hasOwnProperty("docs") ) {

//    return <div>Loading...</div>
//   }

//   return (
//     <>
//       <div>{resultMovie.docs[0].name}</div>
//       <ul>
//         {resultQuote.docs.map(({ dialog, _id }, index) => {
//           if (index > 10) return false;
//           return <li key={_id}>{dialog}</li>;
//         })}
//       </ul>
//       <ul>
//         {resultCharacter.docs.map(({ _id, name }, index) => {
//           if (index > 10) return false;
//           return <div key={_id}>{name}</div>;
//         })}
//       </ul>
//     </>
//   );
//       };

// export default Details

    
//  {/* <div>{JSON.stringify(movie.name)}</div> */}
//       {/* 
//       */}
    