
import { observer } from "mobx-react";
import DataStore from "../DataStore"
import "./css.css";
const Response=(observer(({input})=> {


 
    return (
      <>
      <h3>{input}</h3>
      <div className="response">{DataStore.response[DataStore.number]}</div>
      
    
  
      </>
    )
  }))
  
  export default Response