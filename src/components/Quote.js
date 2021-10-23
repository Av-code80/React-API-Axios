// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Quote= () => {
//    const [quote, setQuote] = useState();
//    const [character, setCharacter] = useState();

// const headers = {
//     Accept: "application/json",
//     Authorization: "Bearer daNXH8aks1JeT2dEenRY",
//   };
//    useEffect(() => {
//     (async function() {
//         try {
//           const resQuote = await axios.get("https://the-one-api.dev/v2/quote", {
//             headers: headers,
//           });
//           setQuote(resQuote.data.docs)
//         } catch (error) {
//           console.log("Error quote: " + error);
//         }

//     })()

//    }, [])
  
  return (
    <div>
      <Link to="/character"> Quote :
        {/* <blockquote>{quote}</blockquote>
        <cite>- {character}</cite> */}
      </Link>
    </div>
  );
};

export default Quote
