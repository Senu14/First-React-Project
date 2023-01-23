import { useState } from "react";
const Kontaktformular = () =>{
// b lode will not be show
     const [show, setShow] = useState(false)
     const [state, setState] = useState({
          fuldenavn: "",
          telefonnummer: "",
          email:"",
          kommentar:"",
          kontaktmethode:""
        })
     //  Create handleChange and 
        function handleChange (event){
          const value=event.target.value
          console.log(event.target)
          setState({
               ...state,
               [event.target.name]:value 
          })

        }
//  it display the values  
        function handleSubmit (event) {
          event.preventDefault();

          setShow(true)
        }
// we create new object with empty values and with setState, update the state
        function handleClear () {
          setState ({
               fuldenavn: "",
               telefonnummer: "",
               email:"",
          kommentar:"",
          kontaktmethode:""
          })
// setShow help us to haide the values

            setShow(false)
        }
        
      
     return(
          <>
        <form onSubmit={handleSubmit}>
      <label>Fulde navn:</label>
        <input type="text" name="fuldenavn" value={state.fuldenavn} onChange={handleChange}/>
        <label>Telefonnummer:</label>
        <input type="text" name="telefonnummer" value={state.telefonnummer} onChange={handleChange} />
        <label>Email:</label>
        <input type="text" name="email" value={state.email} onChange={handleChange}/>
        <label>Kommentar:</label>
        <input type="text" name="kommentar" value={state.kommentar} onChange={handleChange}/>

        <select name="kontaktmethode" value={state.kontaktmethode} onChange={handleChange}> 
          <option value='Telefonnummer'>Telefonnummer</option>
          
          <option value='Email'>Email</option>
        </select>
       <button type="submit">sende</button>
       <button type="button" onClick={handleClear}>nulstille</button>
      
    </form>
    
    { show && 
    <div>
     <p>fuldenavn: {state.fuldenavn}</p>
     <p>telefonnummer: {state.telefonnummer}</p>
     <p>email: {state.email}</p>
     <p>kommentar: {state.kommentar}</p>
     <p>kontaktmethode: {state.kontaktmethode}</p>
    </div>
    }



          </>
     )
}
export default Kontaktformular;