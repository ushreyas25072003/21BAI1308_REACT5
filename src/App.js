import "./style.css"
import {useState} from "react"


//////////////////////////////////////////////////////
//                 APP
//////////////////////////////////////////////////////

export default function App(){
  let [age,setAge]=useState('0');
  let [getsdate,Setgetsdate]=useState('');


  function getsthedate(e){
    Setgetsdate(e.target.value.slice(0,4));
  }
  
  function submit(){
      if(!getsdate) return;
      
      calcAge(getsdate)
  }

  function calcAge(userDate){
      let currentYear=new Date().getFullYear();
      let outputs=(currentYear)-(userDate);

      setAge(outputs);

  }

  return(
    <div className="container">
      <h1 className="headertext">Age Calculator</h1>
      <h2 className="h2text">Enter Your Date Of Birth</h2>

      <input type="date" onChange={getsthedate}></input>

      <button className="calculate" onClick={submit}>Calculate Age</button>

      <h4>You Are {age} Years Old</h4>
    </div>
  )
  
}