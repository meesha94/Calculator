
import './App.css';
import Pinkcounter from './compo/counter';
import React from 'react'
import Calculator from './compo/calculator';
import Todo from './compo/todo';
import Me from './compo/todolist';






const  App = () =>  {
  
  
    return (
      <div>
        <Pinkcounter/>
        <Calculator />
        <Todo/>
        <Me/>
        
      </div>
     
    );
}
  
  
  
export default App;
  