import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Header from './Component/Header';
import Counter from './Component/Counter';

const App = ()=>{
  return(
    <>
    {/* <Header/> */}
    <h1 style={{fontSize:"2.5rem"}}>React Js Counter </h1>
   
    <Counter/>
 </>
  )
}







ReactDOM.render(<App/>,document.getElementById('root'));