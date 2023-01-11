import { NavLink } from "react-router-dom";

const  navigation= () => {
  return (
    <nav>
     <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/About'>About</NavLink></li>
          <li><NavLink to='/Product'>Product</NavLink></li>
          <li><NavLink to='/Jobs'>Jobs</NavLink></li>
          <li><NavLink to='/Contact'>Contact</NavLink></li>
          
     </ul>
    </nav>
  )
}




export default navigation;
