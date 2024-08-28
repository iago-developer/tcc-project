import React,{useState} from "react";
import './App.css';
import Relogio from './components/Relogio';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
 return (
  <>
   <div className="container">   
       <Header />
       <Main />
       <Footer />
   </div>
  </>
 )
}