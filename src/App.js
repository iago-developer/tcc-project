import React,{useState} from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
 return (
  <>
   <div className="container" id="container"> 
       <br />  
       <Main />
       <Footer />
   </div>
  </>
 )
}