import BarMitzvah from "./BarMitzvah";
import Wedding from "./Wedding";
import Birthday from "./Birthday";
import Chalake from "./Chalake";
import Other from "./Other";
import { useState } from "react";
import { observer } from 'mobx-react';
import DataStore from "../DataStore";

const Event=(observer(()=> {

  const [selectedOption, setSelectedOption] = useState('');

  const handleKind =()=>{
    DataStore.changeKind();
  }


    const handleSelectChange = (event) => {
      DataStore.input+=(event.target.value);
        setSelectedOption(event.target.value);
      };
    

    let ComponentToRender;

    switch (selectedOption) {
      case 'חתונה':
        ComponentToRender = Wedding;
        break;
      case 'בר מצוה':
        ComponentToRender = BarMitzvah;
        break;
      case 'יום הולדת':
        ComponentToRender = Birthday;
        break;
       case 'חלאקה':
          ComponentToRender = Chalake;
        break;
       case 'אחר':
          ComponentToRender = Other;
        break;
      default:
        ComponentToRender = () => <></>;
    }

    return (
        <>
             
        <select name="event" id="" onChange={handleSelectChange}>
          <option value="">בחר ארוע</option>
          <option value="יום הולדת">יום הולדת</option>
          <option value="חתונה">חתונה</option>
          <option value="בר מצוה">בר מצוה</option>
          <option value="חלאקה">חלקה</option>
          <option value="אחר">אחר</option>
        </select>
        <br/>
        <ComponentToRender input={DataStore.input} func={handleKind}/>
        </>
  )
}))

export default Event