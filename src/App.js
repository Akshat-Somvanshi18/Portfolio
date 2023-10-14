import React, { Component , useState , useEffect} from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import Section6 from "./Components/Section6";
import Section7 from "./Components/Section7";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import NavbarContact from "./Components/NavbarContact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App (){

  // DISABLING THE CHANGES IN VALUE OF p WHEN THE BROWSER IS REFRESHED
  const storedValueAsNumber = Number(localStorage.getItem('p'));
  const [p, setP] = useState(
    Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0
  );
    useEffect(() => {
      localStorage.setItem('p', String(p));
    }, [p]);

    let f1=(choice)=>{
      if(choice===1)
        setP(1);
      else if(choice===2)
        setP(2);
      else if(choice===3)
        setP(3);
      else if(choice===4)
        setP(4);
      else if(choice===5)
        setP(5);
      else if(choice===6)
        setP(6);

      console.log(p);
    }

    return (
      <>
        <Router basename="/">
          <Routes>
          <Route exact path="/" element={<><Navbar title="MyPortfolio"/><Section1/><Section2/><Section3/><Section7/><Section4/><Section5 myfunc1={f1} /><Section6/></>}/>
          <Route exact path="/Contact" element={<><NavbarContact title="MyPortfolio"/><Contact/></>}/>
          <Route exact path="/Resume" element={<><NavbarContact title="MyPortfolio"/><Resume/></>}/>
          <Route exact path="/Projects" element={<><NavbarContact title="MyPortfolio"/><Projects detail={p}/></>}/>
          </Routes>
        </Router>
      </>
    );
  }
export default App;