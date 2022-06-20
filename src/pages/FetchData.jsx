import React, { useState } from 'react'
import { data } from '../data';

const FetchData = () => {
const [people, setPeople]=useState(data);


  return (
    <div>
    <h2>{people.length}People are there</h2>
    {people.map(({id, name})=>(
       <article key={id}>
        <h3>{name}</h3>
       </article> 
    ))}
 </div>
  );
}

export default FetchData