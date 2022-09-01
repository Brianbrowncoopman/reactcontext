
import { useContext } from "react"
import userContext from "../context/UserContext";

function Contador () {

  const context = useContext(userContext)

  let gastosTotal = 0;
  for(let i = 0 ; i<context.length; i++)
  gastosTotal += Number(context[i])

  return (
  <div> Gasto mensual: {gastosTotal}</div>
  )
  
}

export default Contador