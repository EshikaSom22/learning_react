import React from 'react'
const fname="Eshika";
const lname="Som";
const currentDate= new Date().toLocaleDateString();
const currentTime=new Date().toLocaleTimeString();
const App = () => {
  return (
    <>
      <h1>{`My name is ${fname} ${lname}.`}</h1>
      <p>Current date: {currentDate}</p>
      <p>Current time: {currentTime} </p>
      </>
  )
}

// var h2=document.createElement("h2");
// h2.innerHTML=" like";
// document.getElementById('root').appendChild(h2);
export default App