import React from 'react';
import './App.css';
import Class from './components/component-types/class';
import Greet from './components/component-types/function';
import Arrow from './components/component-types/arrowfn';
import Props from './components/propsAndState/propsClass';
import Fn from './components/propsAndState/propsFn';
import State from './components/propsAndState/Setstate';
import MappingArray from './components/propsAndState/mappingArray';
import Events from './components/bindingEvent/events';
import BasicHooks from './components/hookes/basic-hooks';
import HookesObject from './components/hookes/hookesObject';
import Ref from './components/hookes/ref';
import Navbar from './components/router/navbar';
import Home from './components/router/home';
import ContactUs from './components/router/contactUs';
import AboutUs from './components/router/aboutUs';
import Blog from './components/router/blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";
import Footer from './components/router/footer';


function App() {
  return (
   
    <div>
      <Router>
      <Navbar/>
      <Route exact path = '/home' component={Home}/>
      <Route  path = '/aboutus' component={AboutUs}/>
      <Route path = '/contactus' component={ContactUs}/>
      <Route path = '/blog' component={Blog}/>
      </Router>
      <Footer/>
      <MappingArray/>
      <State/>
      <BasicHooks/>
      <HookesObject/>
      <Ref/>
      <Class></Class>
      <Greet></Greet>
      <Arrow></Arrow>
      <Props name="Jhon Doe"></Props>
      <Fn place = "England" postal = '212323' gender="male"></Fn>
      
      
      <Events></Events>
      
      
       
      </div>     
  ) 
}

export default App;
