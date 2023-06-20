import API from './API';
import React from 'react';
import { useEffect,useState } from 'react';

function App(props) {

  const [result, setResult] = useState([]);

useEffect(() => {
  const url = "https://newsbackend-388608.as.r.appspot.com/api/v1/articles/list?category=10&format=json"
    fetch(url).then(res => res.json())
    .then(res => {
    console.log(res)
    setResult(res);
   })
    .catch(err => setResult(err))

     
     
      
  }, []);
  return (
      <div className="App">
        <API dataObject={result}/>
      </div>
    );
}

export default App;