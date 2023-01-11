import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Product from'../pages/Product'
import Jobs from '../pages/Jobs'
import Contact from '../pages/About'

const CustomRouter=  () => {
  return (
   <Routes>
     <Route index element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/product" element={<Product />} />
     <Route path="/jobs" element={<Jobs />} />
     <Route path="/contact" element={<Contact />} />
   </Routes>
  )
}


export default CustomRouter;