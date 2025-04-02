import DataStore from "../DataStore";
import Kind from "./Kind";
import { observer } from "mobx-react";

const Other=(observer(()=> {

const handleChange = (event) => {
    DataStore.setInput()
    DataStore.input+=event.target.value;

      }
    return (
        <>
        <input type="text" name="" id="" onChange={handleChange} />
        <label>?איזה ברכה תרצה</label>
        <br/>
        <Kind ></Kind>

        </>
  )
}))

export default Other
