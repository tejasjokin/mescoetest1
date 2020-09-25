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
    type: '',
    student_user: {
      id: '',
      name: '',
      year: '',
      branch: '',
      div: '',
      prn: '',
      email: '',
      joined: '',
    },
    faculty_user: {
      id: '',
      name: '',
      employeeid: '',
      year: '',
      branch: '',
      prn: '',
      email: '',
    }
  }
  }
  setUserType = (type) => {
    this.setState({type: type}, () => {
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

  loadStudent = (user) => {
    this.setState({student_user: {
      id: user.id,
      name: user.name,
      year: user.year,
      branch: user.branch,
      div: user.div,
      prn: user.prn,
      email: user.email,
      joined: user.joined
    }})
  }

  loadFaculty = (user) => {
    this.setState({faculty_user:{
      id: user.id,
      name: user.name,
      employeeid: user.employeeid,
      year: user.year,
      branch: user.branch,
      prn: user.prn,
      email: user.email, 
    }})
  }

  render()
  {
    const {faculty_user, student_user, route, type, passcode} = this.state;
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
          <SignIn user_type ={type} loadFaculty = {this.loadFaculty} loadStudent = {this.loadStudent} onRouteChange={this.onRouteChange} />
        </div>
      );
    }
    else if(route==='Faculty')
    {
      return(
        <div className="App">
          <Navigation onRouteChange = {this.onRouteChange}/>
          <SignIn loadStudent = {this.loadStudent} loadFaculty = {this.loadFaculty} user_type ={type} onRouteChange={this.onRouteChange} />
        </div>
      );
    }
    else if(route==='StudentHome'){
      return(
        <div className="App">
          <StudentHome student_user = {student_user} onRouteChange = {this.onRouteChange}/>
        </div>
      );
    }
    else if(route==='Register')
    {
      return(
        <div className="App">
          <Navigation onRouteChange = {this.onRouteChange}/>
          <Register onRouteChange = {this.onRouteChange} loadFaculty = {this.loadFaculty} loadStudent = {this.loadStudent} />
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
          <FacultyHome faculty_user = {faculty_user} passcode = {passcode} onGenerate = {this.onGenerate} onRouteChange = {this.onRouteChange}/>
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
