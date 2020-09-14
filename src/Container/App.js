import React, {Component} from 'react';
import Card from '../Components/Card/Card.js';
import Navigation from '../Components/Navigation/Navigation.js';
import SignIn from '../Components/SignIn/SignIn.js';
import StudentHome from '../Components/StudentHome/StudentHome.js';
import Attendance from '../Components/Attendance/Attendance.js';
import FacultyHome from '../Components/FacultyHome/FacultyHome.js';
import NoticeBoard from '../Components/NoticeBoard/NoticeBoard.js';
import Register from '../Components/Register/Register.js';
import './App.css';
import StudentImage from '../Images/StudentImage.png';
import TeacherImage from '../Images/TeacherImage.png';

class App extends Component{
  constructor(){
  super();
  this.state = {
    route: 'landing',
    passcode: '',
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

  onGenerate = () => {
    let randomstring = Math.random().toString(36).slice(-8);
    this.setState({passcode: randomstring});
  } 

  render()
  {
    const {route, user, passcode} = this.state;
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
          <SignIn user_type ={type} onRouteChange={this.onRouteChange} />
        </div>
      );
    }
    else if(route==='Faculty')
    {
      return(
        <div className="App">
          <Navigation onRouteChange = {this.onRouteChange}/>
          <SignIn user_type ={type} onRouteChange={this.onRouteChange} />
        </div>
      );
    }
    else if(route==='StudentHome'){
      return(
        <div className="App">
          <StudentHome onRouteChange = {this.onRouteChange}/>
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
    else if(route==='Attendance'){
      return(
        <div className="App">
          <Attendance />
          <button className='btn1 grow shadow-5' onClick={()=>this.onRouteChange('StudentHome')} >Check Attendance</button>
        </div>
      );

    }
    else if(route==='FacultyHome')
    {
      return(
        <div className="App">
          <FacultyHome passcode = {passcode} onGenerate = {this.onGenerate} onRouteChange = {this.onRouteChange}/>
        </div>
      );
    }
    else if(route==='Notice_Students')
    {
      return(
        <div className="App">
          <NoticeBoard />
        </div>
      );
    }
  }
}

export default App;
