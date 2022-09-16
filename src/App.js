import React,{useState,useEffect} from 'react';
import Main from './Components/Main';
import CreateProduct from './Components/CreateProduct';
import {Route , Routes} from 'react-router-dom';

function App() {
  return(
    <div>
      <Routes>
        <Route path="/products" element={<Main />}/>
        <Route path="/products/create" element={<CreateProduct />}/>
      </Routes>
    </div>
  )
}

export default App;
