import React, {Component} from 'react';
import './Register.css';
import StudentRegister from '../StudentRegister/StudentRegister.js';
import FacultyRegister from '../FacultyRegister/FacultyRegister.js';
import 'tachyons';

class Register extends Component {
	constructor(){
	super();
	this.state = {
		type: 'Student',
	}	
	}

	onTypeChange = (type) => {
		this.setState({type: type})
	}

	render(){
		const {type} = this.state;
		if(type==='Student')
		{
		return(
			<main className="pa4 black-80">
			  <form className="measure center br3 pa3 shadow-2 cardContainer">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0">Sign-In</legend>
			      <div className = 'flex justify-center'>
			      	<div className = 'ph3 pv3'>
			      		<legend onClick = {() => this.onTypeChange('Student')} className="highlight link dim pointer f3 fw6 ph0 mh0">As a student</legend>
			      		<hr className = 'hr'/>
			      	</div>
			      	<div className = 'ph3 pv3'>
			      		<legend onClick = {() => this.onTypeChange('Faculty')} className="link dim pointer f3 fw6 ph0 mh0">As a faculty</legend>
			      		<hr />
			      	</div>
			      </div>
			      <StudentRegister />
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="button" value="Register" />
			    </div>
			    <div className="lh-copy mt3">
			      <a href="#0" className="f5 link dim black db">Log in</a>
			    </div>
			  </form>
			</main>
		);	
		}
		else if(type==='Faculty')
		{
		return(
		<main className="pa4 black-80">
		  <form className="measure center br3 pa3 shadow-2 cardContainer">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f2 fw6 ph0 mh0">Sign-In</legend>
		      <div className = 'flex justify-center'>
		      	<div className = 'ph3 pv3'>
		      		<legend onClick = {() => this.onTypeChange('Student')} className="link dim pointer f3 fw6 ph0 mh0">As a student</legend>
		      		<hr />
		      	</div>
		      	<div className = 'ph3 pv3'>
		      		<legend onClick = {() => this.onTypeChange('Faculty')} className="highlight link dim pointer f3 fw6 ph0 mh0">As a faculty</legend>
		      		<hr className = 'hr'/>
		      	</div>
		      </div>
		      <FacultyRegister />
		    </fieldset>
		    <div className="">
		      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="button" value="Register" />
		    </div>
		    <div className="lh-copy mt3">
		      <a href="#0" className="f5 link dim black db">Log in</a>
		    </div>
		  </form>
		</main>
		);	
		}
	}
}

export default Register;