import React from 'react';
import 'tachyons';
import './Card.css';

const Card = ({header, src, setUserType, user_type}) => {
	return(
		<div onClick = {() => {setUserType(user_type)} }className="tc dib br3 pa3 ma4 grow shadow-2 cardContainer">
			<img alt="robot" src = {`${src}`} className = "image"></img>
			<div>
				<hr />
				<h2>{header}</h2>
			</div>
		</div>
	);
}

export default Card;