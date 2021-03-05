import React from "react";
import Dataarea from "./components/Dataarea.js";
import Wrapper from "./components/Wrapper";
//import './App.css';
import Header from "./components/Header.js";
function App() {
  return (
   <div>
      <Wrapper>
     <Header/>
     <Dataarea/>
     
    </Wrapper> 
   </div>
  
  );
}

export default App;
