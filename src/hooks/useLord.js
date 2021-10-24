// import axios from 'axios'
// import { useState, useEffect} from 'react'


// const useLord = (url) => {

// const [loading, setLoding] = useState(false)
// const [result, setResult] = useState([])
// const [error, setError] = useState({})


//    useEffect(() => {
//      const baseUrl = "https://the-one-api.dev/v2/"+url;

//      const headers = {
//        Accept: "application/json",
//        Authorization: "Bearer daNXH8aks1JeT2dEenRY",
//      };

//      (async function () {
//        try {
//          setLoding(true);
//          const response = await axios.get(baseUrl, { headers });
//          //console.log(response.data.docs);
//          console.log(response)
//          if (response.data.docs.length > 0) {
//               setLoding(false);
//               setResult(response.data);
//          }
        
//        } catch (error) {
//          setError(error);
//        }
//      })();
//    }, [url]);

//    return [loading, result, error] 
// }

// export default useLord
