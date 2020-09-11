import React, {Component} from 'react';
import Card from '../Components/Card/Card.js';
import Navigation from '../Components/Navigation/Navigation.js';
import SignIn from '../Components/SignIn/SignIn.js';
import Register from '../Components/Register/Register.js';
import './App.css';
import StudentImage from '../Images/StudentImage.png';
import TeacherImage from '../Images/TeacherImage.png';

class App extends Component{
  constructor(){
  super();
  this.state = {
    route: 'landing',
    user: {
      type: ''
    }
  }
  }

  setUserType = (type) => {
    this.setState({user: {
      type: type
    }}, () => {
      this.onRouteChange(type);
    });
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  } 

  render()
  {
    const {route, user} = this.state;
    const {type} = user;
    if(route==='landing')
    {
      return(
        <div className="App">
          <Navigation onRouteChange = {this.onRouteChange} />
          <div className = "ChoiceContainer">
            <Card header = 'LOGIN AS STUDENT'src = {StudentImage} setUserType = {this.setUserType} user_type = 'Student' />
            <Card header = 'LOGIN AS FACULTY' src = {TeacherImage} setUserType = {this.setUserType} user_type = 'Faculty'/>
          </div>
        </div>
      );
    }
    else if(route==='Student')
    {
      return(
        <div className="App">
          <Navigation onRouteChange = {this.onRouteChange}/>
          <SignIn user_type ={type} />
        </div>
      );
    }
    else if(route==='Faculty')
    {
      return(
        <div className="App">
          <Navigation onRouteChange = {this.onRouteChange}/>
          <SignIn user_type ={type} />
        </div>
      );
    }
    else if(route==='Register')
    {
      return(
        <div className="App">
          <Navigation onRouteChange = {this.onRouteChange}/>
          <Register />
        </div>
      );
    }
  }
}

export default App;
