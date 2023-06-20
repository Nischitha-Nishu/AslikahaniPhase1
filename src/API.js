import React from "react";
import { useEffect, useState } from "react";

function API(props) {
  
  const [result, setResult] = useState(props.dataObject);

  useEffect(() => {
    console.log(setResult(result));
  }, [result]);

  return <p>{result}</p>;
}

export default API;