
import { useContext } from "react";
import userContext from "../context/UserContext";

function GastoMes(props){

  const context = useContext(userContext)

  return (

    <ul>
      {props.map ((gastos,index) =>( <li key = {index}>{gastos}</li>))}
    </ul>
  );
}

export default GastoMes