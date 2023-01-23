import { useState } from 'react'


 const Greeting = () => {
     const [ name, setName] = useState ('Senait');
     return(
          <>
          <h1>Hej. mit navn er {name}</h1>
          <input type="text" onInput={event => setName(event.target.value)}/>
          

      
          </>
          )
         
     }



export default Greeting;