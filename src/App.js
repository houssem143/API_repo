import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/Main';
import Recipe from './components/Recipe';
function App() {


  return (
    <div className="App">
 <Recipe />
  {/* <Main /> */}
  
    </div>
  );
}

export default App;
