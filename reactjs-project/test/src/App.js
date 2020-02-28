import React from 'react';
import './App.css';
import Navbar from './components/router/navbar';
import Home from './components/router/home';
import ContactUs from './components/router/contactUs';
import AboutUs from './components/router/aboutUs';
import Blog from './components/router/blog';
import MyProjects from './components/router/myProjects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";
import Footer from './components/router/footer';
import Routerparameter from './components/router/routerparameter';
import PlayersList from './components/votings/PlayersList';



function App() {
  return (
   
    <div>
      <Router>
      <Navbar/>
      <Route exact path = '/' component={Home}/>
      <Route  path = '/aboutus' component={AboutUs}/>
      <Route path = '/contactus' component={ContactUs}/>
      <Route path = '/blog' component={Blog}/>
      <Route path = '/myProjects' component = {MyProjects}/>
      <Route path = '/PlayersList' component = {PlayersList}/>
      <Route path = '/arjun/:post_id' component={Routerparameter}/>
      </Router>
      <Footer/>
      
     </div>     

  ) 
}

export default App;
