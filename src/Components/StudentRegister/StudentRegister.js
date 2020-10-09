import React from 'react';
import 'tachyons';

const StudentRegister = ({year, onNameChange, onPasswordChange, onEmailChange, onPRNChange, onBranchChange, onDivChange, onYearChange}) => {
	return(
		<div>
			<div className="mt3">
		        <label className="db fw6 lh-copy f4" htmlFor="email-address">Name</label>
		        <input onChange = {(event) => onNameChange(event)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
	      	</div>
		  	<div className="mt3">
		        <label className="db fw6 lh-copy f4" htmlFor="email-address">Year</label>
		        <select onChange = {(event) => onYearChange(event)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="year"  id="year">
		        	<option className = 'db fw6 lh-copy f4 greyed' value='None'>Select Year</option>
		        	<option className = 'db fw6 lh-copy f4' value='FE'>FE</option>
		        	<option className = 'db fw6 lh-copy f4' value='SE'>SE</option>
		        	<option className = 'db fw6 lh-copy f4' value='TE'>TE</option>
		        	<option className = 'db fw6 lh-copy f4' value='BE'>BE</option>
		        </select>
	      	</div>
	      	<div className="mt3">
		        <label className="db fw6 lh-copy f4" htmlFor="email-address">Branch</label>
		        <select onChange = {(event) => onBranchChange(event)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="branch"  id="branch">
		        	<option className = 'db fw6 lh-copy f4 greyed' value='None'>Select Branch</option>
		        	<option className = 'db fw6 lh-copy f4' value='COMP'>COMP</option>
		        	<option className = 'db fw6 lh-copy f4' value='ENTC'>ENTC</option>
		        	<option className = 'db fw6 lh-copy f4' value='MECH'>MECH</option>
		        </select>
	      	</div>
	      	<div className="mt3">
		        <label className="db fw6 lh-copy f4" htmlFor="email-address">Class</label>
		        <select onChange = {(event) => onDivChange(event)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="class"  id="class">
		        	<option className = 'db fw6 lh-copy f4 greyed' value='None'>Select Class</option>
		        	<option className = 'db fw6 lh-copy f4' value='1'>{year}-1</option>
		        	<option className = 'db fw6 lh-copy f4' value='2'>{year}-2</option>
		        	<option className = 'db fw6 lh-copy f4' value='SS'>{year}-SS</option>
		        </select>
	      	</div>
	      	<div className="mt3">
		        <label className="db fw6 lh-copy f4" htmlFor="email-address">PRN</label>
		        <input onChange = {(event) => onPRNChange(event)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="PRN"  id="PRN" />
	      	</div>
	      	<div className="mt3">
		        <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
		        <input onChange = {(event) => onEmailChange(event)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
	      	</div>
	      	<div className="mv3">
		        <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
		        <input onChange = {(event) => onPasswordChange(event)} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
	      	</div>
      	</div>
	);
}

export default StudentRegister;