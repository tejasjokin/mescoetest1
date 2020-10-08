import React, {Component} from 'react';
import './Register.css';
import StudentRegister from '../StudentRegister/StudentRegister.js';
import FacultyRegister from '../FacultyRegister/FacultyRegister.js';
import 'tachyons';

class Register extends Component {
	constructor(props){
	super(props);
	this.state = {
		type: 'Student',
	    user: {
	    }
	}
	}

	onYearChange = (event) => {
		this.setState({user: {
			...this.state.user,
			year: event.target.value
		}})
	}

	onDivChange = (event) => {
		this.setState({user: {
			...this.state.user,
			div: event.target.value
		}})
	}

	onBranchChange = (event) => {
		this.setState({user: {
			...this.state.user,
			branch: event.target.value
		}})
	}

	onPRNChange = (event) => {
		this.setState({user: {
			...this.state.user,
			prn: event.target.value
		}})
	}

	onEmployeeIDChange = (event) => {
		this.setState({user: {
			...this.state.user,
			employeeid: event.target.value
		}})
	}

	onNameChange = (event) => {
		this.setState({user: {
			...this.state.user,
			name: event.target.value
		}})
	}

	onEmailChange = (event) => {
		this.setState({user: {
			...this.state.user,
			email: event.target.value
		}})
	}

	onPasswordChange = (event) => {
		this.setState({user: { 
			...this.state.user,
			password: event.target.value
		}})
	}

	onTypeChange = (type) => {
		this.setState({type: type})
	}

	onRegister = () => {
		if(this.state.type==='Student')
		{
			fetch('https://powerful-journey-93753.herokuapp.com/register/student', {
				method: 'post',
				headers:  {'Content-Type': 'application/json'},
				body: JSON.stringify(this.state.user)
			})
			.then(response => response.json())
			.then(user => {
				if(user.id)
				{
					this.props.loadStudent(user)
					this.props.onRouteChange('StudentHome')
				}
				else
				{
					console.log(user);
				}
			})
			.catch(err => console.log);
		}
		else
		{
			fetch('https://powerful-journey-93753.herokuapp.com/register/faculty', {
				method: 'post',
				headers:  {'Content-Type': 'application/json'},
				body: JSON.stringify(this.state.user)
			})
			.then(response => response.json())
			.then(user => {
				if(user.id)
				{
					this.props.loadFaculty(user);
					this.props.onRouteChange('FacultyHome');
				}
				else
				{
					console.log(user);
				}
			})
			.catch(err => console.log);
		}
	}

	render(){
		const {type, user} = this.state;
		const {year} = user;
		if(type==='Student')
		{
		return(
			<main className="pa4 black-80">
			  <form className="measure center br3 pa3 shadow-2 cardContainer">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0">Register</legend>
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
			      <StudentRegister year = {year} onYearChange = {this.onYearChange} onDivChange = {this.onDivChange} onBranchChange = {this.onBranchChange} onNameChange = {this.onNameChange} onPRNChange = {this.onPRNChange} onPasswordChange = {this.onPasswordChange} onEmailChange = {this.onEmailChange}/>
			    </fieldset>
			    <div className="">
			      <input onClick = {() => this.onRegister()} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="button" value="Register" />
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
		      <FacultyRegister onYearChange = {this.onYearChange} onBranchChange = {this.onBranchChange} onEmployeeIDChange = {this.onEmployeeIDChange} onNameChange = {this.onNameChange} onPRNChange = {this.onPRNChange} onPasswordChange = {this.onPasswordChange} onEmailChange = {this.onEmailChange}/>
		    </fieldset>
		    <div className="">
		      <input onClick = {() => this.onRegister()} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="button" value="Register" />
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