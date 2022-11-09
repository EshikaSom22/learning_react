import React from 'react'
const name="eshika";
// const fname="Eshika";
// const lname="Som";
// const currentDate= new Date().toLocaleDateString();
// const currentTime=new Date().toLocaleTimeString();
const App = () => {
  return (
    <>
      {/* <h1>{`My name is ${fname} ${lname}.`}</h1>
      <p>Current date: {currentDate}</p>
      <p>Current time: {currentTime} </p> */}

      <h1 contentEditable="true">my name is {name}</h1>
      <img src='https://picsum.photos/id/1/200/300' alt='random image' />
      </>
  )
}

// var h2=document.createElement("h2");
// h2.innerHTML=" like";
// document.getElementById('root').appendChild(h2);
export default App