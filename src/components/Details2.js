// //import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import useLord from '../hooks/useLord';

// const Details = (props) => {


//   const { id: movieId } = props.match.params;
//   const [loadingMovie, resultMovie, errorMovie] = useLord(`movie/${movieId}`);
//   const [loadingQuote, resultQuote, errorQuote] = useLord(`movie/${movieId}/quote`);
//   const [loadingCharacter, resultCharacter, errorCharacter] = useLord("character");


//   if (loadingMovie || loadingCharacter || loadingQuote) {
//     return <div>Loading...</div>
//   }


//   return (
//     <>
//       <Link to="/">Home</Link>

//       <div>{resultMovie[0].name}</div>
//       <ul>
//         {resultQuote.map(({ dialog, _id }, index) => {
//           if (index > 10) return false;
//           return <li key={_id}>{dialog}</li>;
//         })}
//       </ul>
//       <ul>
//         {resultCharacter.map(({ _id, name }, index) => {
//           if (index > 10) return false;
//           return <div key={_id}>{name}</div>;
//         })}
//       </ul>
//     </>
//   );

// };

// export default Details

