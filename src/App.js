
import './App.css';
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500)
  }
  const toggleMode = (cls)=>{
      if(mode === 'light'){
        setMode('dark');
        // removeBodyClasses();
        // document.body.classList.add('bg-'+cls);
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  // const removeBodyClasses = () =>{
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-warning');
  // }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" about="About us 2" mode={mode}  toggleMode={toggleMode}/>
     <Alert alert = {alert} />
      <div className="container my-3" >
        {/* <Routes>
            <Route exact path="/about" element={<About  mode={mode} toggleMode={toggleMode} />} />
            <Route exact path="/" element={<TextForm  showAlert={showAlert} heading = "Enter the text to anazlyze " mode={mode} toggleMode={toggleMode}/>}  />
          </Routes> */}
          <TextForm  showAlert={showAlert} heading = "Enter the text to anazlyze " mode={mode} toggleMode={toggleMode}/>
      </div>
      {/* </Router> */}
    </>

  );
}


export default App;