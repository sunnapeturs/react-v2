import React from 'react';
import { useState, useEffect } from 'react';
import News from './News';

import './App.css';

function App() {

  const[data, setData] = useState([]);
  useEffect(()=>{
    if(!data.length){
    fetch("http://localhost:3000/")
    .then(r=>r.json())
    .then((json)=>{
      console.log(json);
      setData(json);
    });
  }
})

  return (
    <div>
      { data.map(allNews=>{
      return <News news={allNews}/>;
      })} 
    </div>
  );
}
export default App;