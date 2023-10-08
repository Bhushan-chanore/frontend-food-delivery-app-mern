import React from 'react';
import './App.css';
import Home from './screens/Home';

// router
import {   Routes, Route, } from "react-router-dom";
import Login from './screens/Login';

import {CartProvider} from "./components/ContextReducer";


// // bootstrap
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JavaScript
import "bootstrap-dark-5/dist/css/bootstrap-dark.min.css"; // Bootstrap Dark CSS
import Signup from './screens/signup';
import MyOrder from './screens/MyOrder';



function App() {
  return (
    <>
   <CartProvider>
   <Routes>      {/* this should be used as switch case (ROUtES)*/}

<Route exact path='/' element={<Home/>}></Route>            {/* route can be say as case */}
<Route exact path='/login' element={<Login/>}></Route>
<Route exact path='/createuser' element={<Signup/>}></Route>
<Route exact path='/myOrder' element={<MyOrder/>}></Route>
</Routes>
  
   </CartProvider>
    </>
  );
}

export default App;
