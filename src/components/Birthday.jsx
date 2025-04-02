import DataStore from "../DataStore";
import Kind from "./Kind";
import { observer } from "mobx-react";

const Birthday=(observer(()=> {

const handleChange = (event) => {
  DataStore.input+=" שמתאים לגיל "+event.target.value;
      }
    return (
        <>
        <input type="text" name="" id="" onChange={handleChange} />
        <label>?בן כמה את/ה</label>
        <br/>
        <Kind ></Kind>

        </>
  )
}))

export default Birthday
