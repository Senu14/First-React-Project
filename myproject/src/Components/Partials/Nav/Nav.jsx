const ArrNav = [
     'front page',
     'Products',
     'About us',
     'Vacancies', 
     'Contact us' 
     ];

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