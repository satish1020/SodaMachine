import React, { Component } from 'react';

export default class BtnMoneyBack extends Component {
	render(){
		const {lastPurchased, moneyBack, money} = this.props; 
		return (
			lastPurchased || money ? <button onClick={moneyBack} className="btn btn-success">
				Get your {lastPurchased ? `${lastPurchased.toLowerCase()} and ` : null} money 
			</button> : null
		)
	} 
}

BtnMoneyBack.propTypes = {
  money: React.PropTypes.number,
  moneyBack: React.PropTypes.func,
  lastPurchased: React.PropTypes.string
}