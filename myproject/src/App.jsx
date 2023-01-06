import "./App.scss";
import { Header } from  "./Components/Partials/Header/Header";
import { Main } from  "./Components/Partials/Main/Main";
import { Nav } from "./Components/Partials/Nav/Nav";
import { Footer } from "./Components/Partials/Footer/Footer";

import React from "react";
<link rel="stylesheet" href="./App.css" />

function App() {
  return ( 
    <div className = "App">
      <button class="learn-more">
  <span class="circle" aria-hidden="true">
  <span class="icon arrow"></span>
  </span>
  <span class="button-text">Practice to Perfect</span>
</button>
      <Header PageTitle="" />
      <Main />
      <Nav />
       
      <Footer />
    </div>
  )

 
}


export default App;



