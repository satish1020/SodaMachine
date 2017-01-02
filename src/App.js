import React, { Component } from 'react';
import Items from './Components/Items';
import Saldo from './Components/Saldo';
import Available from './Components/Available';
import BtnMoneyBack from './Components/BtnMoneyBack';

import './css/bootstrap.min.css'
import './css/App.css';

import logo from './img/react.png';
import twix from './img/twix.jpg';
import coke from './img/coca-cola.jpg';
import chocolate from './img/chocolate.jpg';
import doritos from './img/doritos.jpg';
import peanuts from './img/peanuts.jpg';
import water from './img/water.gif';
import chewingGum from './img/chewing-gum.jpg';
import chips from './img/chips.jpg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [
        {itemId: "a01", itemName: "Twix", itemPrice: 1, itemCount: 2, imgUrl: twix},
        {itemId: "a02", itemName: "Coke", itemPrice: 2.4, itemCount: 3, imgUrl: coke},
        {itemId: "a03", itemName: "Chocolate", itemPrice: 1.5, itemCount: 4, imgUrl: chocolate},
        {itemId: "a04", itemName: "Doritos", itemPrice: 1.40, itemCount: 1, imgUrl: doritos},
        {itemId: "b04", itemName: "Peanuts", itemPrice: 1, itemCount: 1, imgUrl: peanuts},
        {itemId: "b01", itemName: "Water", itemPrice: 0.95, itemCount: 2, imgUrl: water},
        {itemId: "b02", itemName: "Chewing gum", itemPrice: 1.25, itemCount: 3, imgUrl: chewingGum},
        {itemId: "b03", itemName: "Chips", itemPrice: 1.30, itemCount: 4, imgUrl: chips}
      ],
      money: 0,
      coins: [0.05, 0.10, 0.25, 0.50, 1],
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
          <h1 className="text-center">Vending machine app <img src={logo} alt=".." title="ReactJS" height="50"/></h1>
          <div className="alert alert-info text-center" role="alert">
            <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Add virtual money, purchase by clicking on item - and have fun!</div>
          <Items  items={this.state.items} purchaseItem={this.purchaseItem} />
          <Saldo  coins={this.state.coins} 
                  money={this.state.money} 
                  addValue={this.addValue}
                  moneyBack={this.moneyBack}
                  lastPurchased={this.state.justPurchased}
          >
            <Available money={this.state.money} />
            <BtnMoneyBack money={this.state.money} moneyBack={this.moneyBack} lastPurchased={this.state.justPurchased} />
          </Saldo>
          <p className="author">Made with <span className="text-danger">♥</span>/<img src={logo} alt=".." height="16" title="ReactJS" /> by <a href="http://danko-m.github.io/" target="_blank">Danko</a></p>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  items: React.PropTypes.array,
  purchaseItem: React.PropTypes.func,
  coins: React.PropTypes.array,
  money: React.PropTypes.number,
  addValue: React.PropTypes.func,
  moneyBack: React.PropTypes.func,
  lastPurchased: React.PropTypes.string
}

export default App;
