import React from 'react'
const name="eshika";
const img1= "https://picsum.photos/id/1/200/300";
const img2= "https://picsum.photos/id/1/250/300";
const img3= "https://picsum.photos/id/1/300/300";
const link="https://www.thapatechnical.com/";
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
      <img src={img1} alt='random image' />
      <img src={img2} alt='random image'/>
      <a href={link} target="thapa">
      <img src={img3} alt='random image' />
</a>
      </>
  )
}

// var h2=document.createElement("h2");
// h2.innerHTML=" like";
// document.getElementById('root').appendChild(h2);
export default App