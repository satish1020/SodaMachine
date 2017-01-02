import React, { Component } from 'react';

export default class BtnMoneyBack extends Component {
	render(){
		const {lastPurchased, moneyBack, money} = this.props; 
		return (
			lastPurchased || money ? <button onClick={moneyBack} className="btn btn-success">
				Get your {lastPurchased ? (lastPurchased).toLowerCase() : null} {lastPurchased && money ? 'and' : null } {money ? 'money' : null} 
			</button> : <button className="btn btn-success" disabled>Get your money</button>  
		)
	} 
}

BtnMoneyBack.propTypes = {
  money: React.PropTypes.number,
  moneyBack: React.PropTypes.func,
  lastPurchased: React.PropTypes.string
}