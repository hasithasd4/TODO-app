import React from 'react';
import { Route,Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Addtask from './component/Addtask';
import Home from './component/Home';
import { Navbar } from './component/Navbar';


const App =() => {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={()=><Home/>}/>
        <Route  path="/add">
       <Addtask/>
        </Route>
      
       
      
      
      </Switch>
     
    </div>
  );
}

export default App;
