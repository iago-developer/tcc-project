import React from "react";
import './App.css';
import './medias/Mobile.css';
import './medias/Laptop.css';
import './medias/Desktop.css';
import './medias/Smart.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
 return (
  <>
   <div className="container" id="container"> 
       <br />  
       <Header />
       <Footer />
   </div>
  </>
 )
}