import React, { Component } from 'react';

export default class BtnMoneyBack extends Component {
	render(){
		const {lastPurchased, moneyBack, money} = this.props; 
		return (
			lastPurchased || money ? <button onClick={moneyBack} className="btn btn-success">
				{/*`Get your ${lastPurchased} and $${money} back` : `Get your $${money} back`*/}
				Get your {lastPurchased ? `${lastPurchased} and ` : null} money 
			</button> : null
		)
	} 

}