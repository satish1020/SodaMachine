import React, { Component } from 'react';

const Dispense = () => {
		const {lastPurchased, moneyBack, money} = this.props; 
		return (
			lastPurchased || money ? <button onClick={moneyBack} className="btn btn-success">
				Get your {lastPurchased ? (lastPurchased).toLowerCase() : null} {lastPurchased && money ? 'and' : null } {money ? 'money' : null} 
			</button> : <button className="btn btn-success" disabled>Press To Dispense</button>  
		)
}

export default Dispense;