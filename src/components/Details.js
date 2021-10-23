import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Details = (props) => {
  const [quote, setQuote] = useState("");
  const [character, setCharacter] = useState("");

  console.log(props.match.params.id);
  //  const {id} = props.match.params.id;
  //  console.log(id);

  const headers = {
    Accept: "application/json",
    Authorization: "Bearer daNXH8aks1JeT2dEenRY",
  };
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(`https://the-one-api.dev/v2/${props.match.params.id}/quote`,
          { headers: headers }
        );
          setQuote(response.data.quote.dialog)
          console.log(response.data.quote.dialog);
        } catch (error) {
        console.log("Error details: " + error);
      } 
      try {
        const response = await axios.get(
          `https://the-one-api.dev/v2/${props.match.params.id}/character`,
          { headers: headers }
        );
        setCharacter(response.character.name);
        console.log(response.character.name);
      } catch (error) {
        console.log("Error details: " + error);
      } 
    })();
  }, []);
  if (!quote && !character) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      {quote.character.map(({_id, quote}) => (
          <li key={_id}>
            <Link to={`/${_id}`}>
              <div>Quote:{quote}</div>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Details
