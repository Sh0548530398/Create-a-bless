import { useState, useEffect } from 'react'
import { getPromptResponse } from '../store';
import Event from './Event';
import DataStore from '../DataStore';
import Response from './Response';
import '../App.css'


function Request() {

  const [button, setButton] = useState(true);
  const [response, setResponse] = useState(false);
  useEffect(() => {
  }, [button]);
  const handleClick1 = () => 
  {
    getPromptResponse(DataStore.input);
    setButton(false);
    setResponse(true);

  }
  const handleClick2 = () => {
    DataStore.addNumber();
    if(DataStore.number>2)
    {
    DataStore.setResponse();  
    getPromptResponse(DataStore.input);
    }

  }
  const handleClick3 = () => {
    setResponse(false)
    setButton(true)
    DataStore.setNumber();
    DataStore.setInput();
    DataStore.response="";
  }
    

 
  return (
    <>
    {!response? 
    <Event ></Event>:
    <Response input={DataStore.input}></Response>}
    <br/>
    {button ? 
    <button onClick={handleClick1}>שליחה</button>:
    <div>
     <button onClick={handleClick2}>רעיון נוסף</button>
     <button onClick={handleClick3}>לבקשה חדשה</button></div>}
     
  

    </>
  )
}

export default Request