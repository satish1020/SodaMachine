import React, { Component } from 'react';

export default class MechanicalSystem extends Component {
	render(){
		const {coins, addValue, children} = this.props;
		const buttons = coins.map((item, i) => { 
			return (
						<button key={i} className="btn btn-warning btn-warning--coins" value={item} onClick={addValue}>
							{item < 1 ? `${item*100 }¢` : `$${item}`}
						</button>	
					)
				} 
			)
		return (
			<div className="row text-center p-relative">
			  <h3>Insert Coins:</h3>
		  	<div className="coins">{buttons}</div>
		  	<h3>Total Amount:</h3>
			  {children}			  
			</div>
		)
	}
}
