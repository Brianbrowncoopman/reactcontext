
import { useContext } from "react";
import userContext from "../context/UserContext";

function AgregarGasto () {

  const context = useContext(userContext)

  function handleSubmit (event) {

    event.preventDefault ();
    const gasto = event.target.elements.gasto.value;
    context (e => [...e, gasto])
    console.log(gasto)
  }

  return (

    <form onSubmit = {handleSubmit}>
      <input id="gasto"/>
      <button type="Submit">Agregue nuevo gasto</button>
    </form>
  )
}

export default AgregarGasto