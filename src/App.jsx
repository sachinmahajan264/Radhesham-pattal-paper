import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { Component } from 'react';
import Pattal from './Radhe-pattal-paper/Pattal';

 export default class App extends Component{
  constructor(props){
    super(props)
    
  }
render(){
  
  return(
    <BrowserRouter>

  <div>
   <Pattal/>
   
  </div>
  </BrowserRouter>

  )
}
 }