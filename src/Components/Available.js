import React from 'react';

export default function Available({money}){	
	return (
		<div className="result">${money}</div>			
	)
}

Available.propTypes = {
  money: React.PropTypes.number
}