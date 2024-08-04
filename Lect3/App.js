import React from "react";
import ReactDOM from "react-dom/client";

// React element is an object
// When we render this onto dom it becomes html element




//This is JSX
const Title =()=>(
  <h1 id="Heading" className="head">
    Namaste React using JSX 🚀
  </h1>
);


// const data=api.getData();
//{data} //JSX  santinize your data and prevent cross side scripting attack, escapes intervention to your cookies,localstorage

//React functional component


// Component Composition
const HeadingComponent=()=> (
<div id="Container">
  <h1>{"Yuppppppppp"}</h1>
  {Title()}
  <Title/>
  <Title></Title>
<h1>React Functional component</h1>
</div>

)



const Bat=()=>(<h1>Hi Ball , How you are feeling!</h1>)
// const Bat=()=>{
//   return <h1>Hi Ball , How you are feeling!</h1>
// }

const Ball=()=>(
  <div id="Match">
  <h2>{40000 + 10000}</h2>
  <Bat/> 
  <h1>I am good. I need to hit you hard...🙌🙌</h1>
  </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading)
// Render functional component

{/* <title/>===  <title><title/> */}
root.render(<HeadingComponent />);
