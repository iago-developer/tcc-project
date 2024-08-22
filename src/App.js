import React,{useState} from "react";
import './App.css';
import Relogio from './components/Relogio';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
    
    const [num, setNum] = useState(10);
    let n1 = 10;

 return (
  <>
   <p>Valor do state: {num}</p>
   <button onClick={() => {setNum(num + 100)}}>100</button>
  </>
 )
}