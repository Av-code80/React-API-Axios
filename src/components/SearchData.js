import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./SearchData.module.css";

const SearchData = () => {
  const [quote, setQuote] = useState();
  const [character, setCharacter] = useState();

  useEffect(() => {
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer daNXH8aks1JeT2dEenRY",
    };
    const fetchData = async () => {
      try {
        const response = await axios.get("https://the-one-api.dev/v2/quote", {
          headers: headers,
        });
        const datas = await response.data;

        const resQuote =
          datas.docs[Math.floor(Math.random() * datas.docs.length)];
        setQuote(resQuote.dialog);

        const secondResponse = await axios.get(
          "https://the-one-api.dev/v2/character?name!=Frodo" + resQuote.character,
          {
            headers: headers,
          }
        );
        const characters = await secondResponse.data;
        console.log(secondResponse.data);

        const resCharacter = characters.docs[0];
        setCharacter(resCharacter.name);
      } catch (error) {
        console.log("Error of Quote" + error);
        console.log("Error of Character" + error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={classes.dataWrapper}>
      <blockquote className={classes.blockQuote}>{quote}</blockquote>
      <cite>- {character}</cite>
    </div>
  );
};

export default SearchData;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import classes from "./SearchData.module.css";

// const SearchData = () => {
//   const [quote, setQuote] = useState();
//   const [character, setCharacter] = useState();

//   useEffect(() => {
//     const headers = {
//       Accept: "application/json",
//       Authorization: "Bearer daNXH8aks1JeT2dEenRY",
//     };
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://the-one-api.dev/v2/quote", {
//           headers: headers,
//         });
//         const datas = await response.data;

//         const resQuote =
//           datas.docs[Math.floor(Math.random() * datas.docs.length)];
//         setQuote(resQuote.dialog);

//         const secondResponse = await axios.get(
//           "https://the-one-api.dev/v2/character?_id=" + resQuote.character,
//           {
//             headers: headers,
//           }
//         );
//         const characters = await secondResponse.data;
//         console.log(secondResponse.data);

//         const resCharacter = characters.docs[0];
//         setCharacter(resCharacter.name);
//       } catch (error) {
//         console.log("Error of Quote" + error);
//         console.log("Error of Character" + error);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <div className={classes.dataWrapper}>
//       <blockquote className={classes.blockQuote}>{quote}</blockquote>
//       <cite>- {character}</cite>
//     </div>
//   );
// };

// export default SearchData;
