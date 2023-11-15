import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  const[mode,SetMode]=useState("info");
  const[alert,SetAlert]=useState(null)

  const ShowAlert=(message,type)=>{
    SetAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      SetAlert(null);
  }, 1800);
  

  }
 
  
  const toggleMode=()=>{
    if(mode ==='info'){
      SetMode('dark');
      document.body.style.backgroundColor="#343a40";
      ShowAlert("Dark mode is enabled","success")
      document.title="TextUtils-Dark Mode"

    
    }
    else{
      SetMode('info');
      document.body.style.backgroundColor="#c2ecf3";
      ShowAlert("Light mode is enabled","success")
      document.title="TextUtils-Light Mode"
     
    }
      
  }
  return (
    
 <>
<BrowserRouter>

<div className="main-container">
<Navbar title="TextUtils" Hometext="Home" mode={mode} toggleMode={toggleMode}/>

<Alert alert={alert}/>


<div className="container">
      <Routes>

        <Route path="*" element={<ErrorPage/> }/>
        <Route path="/" element={<TextForm heading="Enter Text to Analyse" mode={mode} showalert={ShowAlert}/>} />
        <Route path="/about" element={<About mode={mode}/>} />
        
      </Routes>

</div>
<Footer/>
</div>

</BrowserRouter>

</>
  );
}

export default App;
