import React, { Component } from 'react';

export default class Saldo extends Component {
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
			  <h3>Coins:</h3>
		  	<div className="coins">{buttons}</div>
		  	<h3>Money available:</h3>
			  {children}			  
			</div>
		)
	}
}

Saldo.propTypes = {
  coins: React.PropTypes.array,
  addValue: React.PropTypes.func,
  children: React.PropTypes.array
}