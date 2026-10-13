import logo from './logo.svg';
import './App.css';



import Home from './Home.js';
import { Link, Route,Routes } from 'react-router-dom';
import Admission from './Admission.js';
import Shop from './Shop.js'

import { useState,useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout.js';
import Home_List from './List.js/Home_List.js';
import Login_List from './List.js/Login_List.js';
import About_List from './List.js/About_List.js';
import Projects_List from './List.js/Projects_List.js';
import Skills_List from './List.js/Skills_List.js';
import Counter from './Counter.js';
import GetData from './GetData.js';
import Contact_List from './List.js/Contact_List.js';
import Accordion_List from './List.js/Accordion_List.js'
import Camlin from './Camlin.js';

function App() {
 
 //  useEffect({
//    axios.get("https://dummyjson.com/c/a55e-94d8-46c6-9cb0"),
  // .then(res(i)=>{
  //    setShop (res.shop)
  // }) )
  // },[])
  return (
    <div className="App">

     {/* <Product productObj={productObj} />
     {/* <Product productObj={productSOCK} />   */ } 
    {/* <Routes>
      <Route path='/product1' element ={<Shop productObj ={productOf}/>}/>
      <Route path='/product2' element ={<Shop productObj ={productman}/>}/>
      <Route path='/' element = {<Home/>}></Route>
      <Route path ='/Mec' element={<Admission/>}></Route>
     </Routes>

     <Link to ={'/'}>Home</Link> <br/>
     <Link to ={'/Mec'}>Admission</Link> <br/>
     <Link to ={'/product1'}>Product 1</Link> <br/>
     <Link to={'./product2'}>Product 2</Link> <br/> */}
     

    <Camlin/>
   
    </div>
  );
}

export default App;
