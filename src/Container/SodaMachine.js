import React, { Component } from 'react';
import Items from '../Components/Items';
import MechanicalSystem from '../Components/MechanicalSystem.js';
import TotalAmount from '../Components/TotalAmount';
import Dispense from '../Components/Dispense';

import '../css/bootstrap.min.css'
import '../css/App.css';

import logo from '../img/react.png';
// import twix from '../img/twix.jpg';
import coke from '../img/coca-cola.jpg';
import chocolate from '../img/chocolate.jpg';
import doritos from '../img/doritos.jpg';
import peanuts from '../img/peanuts.jpg';
import water from '../img/water.gif';
import chewingGum from '../img/chewing-gum.jpg';
import chips from '../img/chips.jpg';
import {vendingCoins, vendingItems} from '../utils/config';

export class SodaMachine extends Component {
  constructor(){
    super();
    this.state = {
      items: vendingItems,
      money: 0,
      coins: vendingCoins,
      isPurchaseAlowed: true,
      justPurchased: ""
    }
    this.addValue = this.addValue.bind(this);
    this.moneyBack = this.moneyBack.bind(this);
    this.purchaseItem = this.purchaseItem.bind(this);
  } 

  addValue(e){
    const currentValue = this.state.money;
    const isPurchaseAlowed = this.state.isPurchaseAlowed;
    const justPurchased = this.state.justPurchased;
    const addedValue = parseFloat(e.target.value, 10);
    const newValue = currentValue + addedValue;    

    if(isPurchaseAlowed){
      this.setState({
        money: parseFloat(newValue.toFixed(2), 10)
      });      
    } else {
      alert(`One item at a time please. Collect your ${justPurchased.toLowerCase()} first, and then make new purchase.`);
    }
  }

  moneyBack(){
    this.setState({
      money: 0,
      isPurchaseAlowed: true,
      justPurchased: ""
    });
  }

  purchaseItem(e){
    e.preventDefault();
    const currentState = this.state.items.slice(0);
    const isPurchaseAlowed = this.state.isPurchaseAlowed;
    let currentMoney = this.state.money;
    const justPurchased = this.state.justPurchased;
    const index = e.target.getAttribute('data-value');
    const howMany = currentState[index].itemCount;
    const whichItem = currentState[index].itemName;
    const itemPrice = currentState[index].itemPrice;

    if (howMany > 0 && isPurchaseAlowed && itemPrice > currentMoney) {
      alert("It looks like you don't have enough money. Insert some coins.");
    } 

    if(!isPurchaseAlowed){
      alert(`One item at a time please. Collect your ${justPurchased.toLowerCase()} first, and then make new purchase.`);
    }

     if( isPurchaseAlowed && howMany < 1){
      alert("Out of stock. Would you like something else?");
    }

    if(isPurchaseAlowed && howMany > 0 && currentState[index].itemCount > 0 && itemPrice <= currentMoney){       
      currentState[index].itemCount -= 1;    
      currentMoney -= itemPrice;

      this.setState({
        items: currentState,
        money: parseFloat(currentMoney.toFixed(2), 10),
        isPurchaseAlowed: !isPurchaseAlowed,
        justPurchased: whichItem 
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-center">Soda Machine</h1>
          <h1>Insert money, purchase by clicking on item</h1>
          <Items  items={this.state.items} purchaseItem={this.purchaseItem} />
          <MechanicalSystem  coins={this.state.coins} 
                  money={this.state.money} 
                  addValue={this.addValue}
                  moneyBack={this.moneyBack}
                  lastPurchased={this.state.justPurchased}
          >
            <TotalAmount money={this.state.money} />
            <Dispense money={this.state.money} 
                          moneyBack={this.moneyBack} 
                          lastPurchased={this.state.justPurchased} 
            />
          </MechanicalSystem>
        </div>
      </div>
    );
  }
}

