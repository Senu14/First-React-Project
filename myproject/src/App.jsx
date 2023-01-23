import "./App.scss";
import { Header } from  "./Components/Partials/Header/Header";
import { Main } from  "./Components/Partials/Main/Main";
import { Nav } from "./Components/Partials/Nav/Nav";
import { Footer } from "./Components/Partials/Footer/Footer";
import { BrowserRouter } from 'react-router-dom'
import Navigation from "./Components/Partials/Navigation/navigation";
import CustomRouter from "./Components/App/CustomRouter/CustoRouter";
import { Greeting } from "./Components/App/pages/Greeting";
<link rel="stylesheet" href="./App.css" />

function App() {
  return (
    <BrowserRouter>
    <div className = "App">
      <button class="learn-more">
  <span class="circle" aria-hidden="true">
  <span class="icon arrow"></span>
  </span>
  <span class="button-text">Practice to Perfect</span>
</button>
      <Header PageTitle="" />
      <Navigation />
      <Greeting />
      <main>
        <CustomRouter />
      </main>
      <Main />
      <Nav />
       
      <Footer />
    </div>
    </BrowserRouter> 
  )

 
}


export default App;



