import { Nav } from "../Nav/Nav";
const Header = props => {
     return (
          <header>
            <h1>{props.PageTitle}</h1>
            <nav className="headerNav">
               <Nav />
            </nav>         
          </header>
     );
};

export { Header };