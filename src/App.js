import './App.css';
import React, { useState } from 'react'
import Navbar from './componets/Navbar';
// import About from './componets/About';
import Textform from './componets/Textform';
import Alert from './componets/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
   const [mode, setMode] = useState('light')  //Wheather dark mode is enabled or not.
   const[alert, setAlert]=useState('null')
   const showAlert=(message, type)=>{
     setAlert({
       msg:message,
       type:type
     })
     setTimeout(()=>{
       setAlert('null')
      },
       1500
       );
   }
   const toggleMode=()=>{
     if(mode==='light'){
       setMode('dark');
       document.body.style.backgroundColor= ' #4d0099';
       showAlert("Dark mode has been Enabled","Success:")
       document.title="TextUtils-Dark Mode"
      //  setInterval(() => {
      //   document.title="TextUtils-Dark Mode"
      //  }, 2000);
      //  setInterval(() => {
      //   document.title="TextUtils- is amazing website"
      //  }, 1500);
     }
     else{
       setMode('light');
       document.body.style.backgroundColor= 'white'; 
       showAlert("Light mode has been Enabled","Success:")
       document.title="TextUtils-Light Mode"
     }
   }
  return (
    <>
{/* <Router> */}
  <Navbar title="TextUtils" about="about US" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
<div className="container my-3 " >
   {/* <Switch> */}
   {/* user-->component--1
   {/* user/Home-->component--2 */} 
   {/* partial matching  */}
        {/* <Route  exact path="/about"> */}
            {/* <About /> */}
        {/* </Route> */}
         {/* <Route exact path="/">  */}
          <Textform showAlert={showAlert} title="Enter your text to Analyze" mode={mode}/>
         {/* </Route> */}
    {/* </Switch> */}
</div>
    {/* <Router/>  */}
    </>
  );
}

export default App;
