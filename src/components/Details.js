import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


const Details = (props) => {
console.log(props.match.params.id);
    const [movie, setMovie] = useState("")

    const headers = {
      Accept: "application/json",
      Authorization: "Bearer daNXH8aks1JeT2dEenRY",
    };

    useEffect(() => {
        (async function() {  
           const response = await axios.get(`https://the-one-api.dev/v2/movie/${props.match.params.id}`, {
               headers: headers
           }); 
           console.log(response.data.docs);
          })()
           
    }, [])
    
    
    return (
        <Link to="/">
            Details
        </Link>
    )
}

export default Details
