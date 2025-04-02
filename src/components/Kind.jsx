import { useState } from "react";
import DataStore from "../DataStore";

function Kind() {


    const handleSelectChange1 = (event) => {
      DataStore.input+=" סגנון "+(event.target.value)+" ";
      };
    const handleSelectChange2 = (event) => {
        DataStore.input+=(event.target.value);
        };
    const handleSelectChange3 = (event) => {
          DataStore.input+=" באוירה "+(event.target.value);
          };
    return (
        <>
        <br/>
        <select name="Enviroment" id="" onChange={handleSelectChange3}>
          <option value="">אוירה</option>
          <option >מצחיקה</option>
          <option >משעשעת</option>
          <option >שמחה</option>
        </select>
        <select name="kind" id="" onChange={handleSelectChange2}>
          <option value="">קצר/ארוך</option>
          <option >קצר</option>
          <option >ארוך</option>
        </select>
        <select name="kind" id="" onChange={handleSelectChange1}>
          <option value="">שיר/מכתב</option>
          <option >שיר</option>
          <option >מכתב</option>
        </select>
        <br/>
        </>
  )
}

export default Kind