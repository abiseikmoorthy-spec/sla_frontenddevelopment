import React from "react";
const App = () =>{

  const courses = [
    "HTML",
    "Css",
    "JavaScript",
    "React",
    "SQL",

  ]
  return (<>
   <div>
    <h1> Course List</h1>
    {Course .map((Course ,index)=>(
    <p key={index}>{Course}</p>
      ))}
   </div>
   </>
  );
 }
 export default App ;