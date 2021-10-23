import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Details = (props) => {
 const [movie, setMovie] = useState("")
 console.log(props.match.params.id);

  const headers = {
    Accept: "application/json",
    Authorization: "Bearer daNXH8aks1JeT2dEenRY",
  };

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `https://the-one-api.dev/v2/movie/${props.match.params.id}/quote`,
          { headers: headers }
        );
        if (!response.data.docs) {
        setMovie(response.data.docs);
        console.log(response.data.docs);
        }
      } catch (error) {
        console.log("Error details: " + error);
      }
    })();
  });
   if (!movie) return <div>Not available...</div>
   return (
     <div>
       {movie.map(({ _id, name }) => (
         <Link to="/quote">
           Details :
           <div key={_id}>
             {_id} {name}
           </div>
         </Link>
       ))}
     </div>
   );
}

export default Details
