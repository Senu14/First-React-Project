// We have our Array or list under ArrNav
const ArrNav = [
     'front page',
     'Products',
     'About us',
     'Vacancies', 
     'Contact us' 
     ];

//We use map method cuz our components have to special key.
const Nav = () => {
     return (
          <div className="navbar">
            <ul>
               {ArrNav.map((value, key) => {
                    return <li key={key}>{value}</li>;
               })}
            </ul>
          </div>
      );
};

export {Nav};