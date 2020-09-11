import React from 'react';
import 'tachyons';

const Navigation = ({onRouteChange}) => 
{
	return(
		<nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
			<p className = 'tc f3 link dim black pa3 pointer'>MESCOE</p>
			<p onClick = {() => {onRouteChange('landing')}} className = 'f3 link dim black pa3 pointer'>HOME</p>
			<p className = 'f3 link dim black pa3 pointer'>ABOUT</p>
			<p onClick = {() => {onRouteChange('Register')}} className = 'f3 link dim black pa3 pointer'>REGISTER</p>
		</nav>
	);	
}

export default Navigation;