import { useState } from "react"

export default function FormElements(){
     const[FormElm, setformElm] = useState({}, {
          firstname: '...',
          lastname: '...',
          email: '...',
          description: '...'
     })
     const registerInput = e => {
         setformElm(prevState =>{
         
         return{ ...prevState, firstname: e.target.value}
         })


     }
     
     


     return(
          <div>
          <form>
          <h1>Form Element</h1>
          <div>
          <label htmlFor="firstname">Fornavn</label>
          <input type="text" name="firstname" id="Firstname" onChange={registerInput}/>
          </div>

          <div>
          <label htmlFor="lastname">Efternavn</label>
          <input type="text" name="lastname" id="lastname" onChange={registerInput} />
          </div>

          <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="lastname" id="lastname" onChange={registerInput}/>
          </div>

          <div>
          <label htmlFor="description">Profiltekst</label>
          <textarea name="description" id="description" onChange={registerInput}></textarea>
          </div>

          </form>
          <section>
               <ul>
                    <li>Fornavn:{ FormElm.firstname } </li>
                    <li>Efternavn:{ FormElm.lastname }</li>
                    <li>Email:{ FormElm.email } </li>
                    <li>Profiltekst:{ FormElm.description}</li>
               </ul>
             
          </section>
          </div>
     )
}




