import { makeObservable, observable, action } from "mobx";

class DataStore {
    kind=false;
    number=1;
    response={};
    input="כתוב לי ברכה ל";
    
    constructor() {
        makeObservable(this, {
            kind: observable,
            input: observable,
            response:observable,
            number:observable,
            addNumber:action,
            setInput:action,
            setResponse:action,
        })
    }

  changeKind=()=>{
    this.kind=!this.kind;
  }
  setInput=()=>{
    this.input="כתוב לי ברכה ל";
  }

  setResponse=()=>{
    this.response="";
  }
  addNumber=()=>{
    if(this.number==3)
    {
      this.number=0;
    }
    this.number+=1;
  }
  setNumber=()=>{
    this.number=1;
  }

}

export default new DataStore();