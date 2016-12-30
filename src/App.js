import React, { Component } from 'react';
import Items from './Components/Items'
import Saldo from './Components/Saldo'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [
        {itemId: "a01", itemName: "Twix", itemPrice: 1, itemCount: 2, imgUrl: "http://store.cheapfoods.com.au/546-home_default/twix-2-fngers-k-sze-72gm.jpg"},
        {itemId: "a02", itemName: "Coke", itemPrice: 2.4, itemCount: 3, imgUrl: "https://www.delivon.com/548-home_default/coca-cola-can-aerated-drink.jpg"},
        {itemId: "a03", itemName: "Chocolate", itemPrice: 1.5, itemCount: 4, imgUrl: "http://4.imimg.com/data4/TR/LY/GLADMIN-184160/cadbury-dairy-milk-chocolate-250x250.jpg"},
        {itemId: "a04", itemName: "Doritos", itemPrice: 1.40, itemCount: 1, imgUrl: "http://cdn2.bigcommerce.com/n-biq04i/nzhu1er/products/5370/images/851/Fairdinks_Doritos_Cheese_Supreme_500g__45389.1386850514.250.250.jpg?c=2"},
        {itemId: "b04", itemName: "Peanuts", itemPrice: 1, itemCount: 1, imgUrl: "https://3.imimg.com/data3/CH/MM/MY-3618295/roasted-salted-peanuts-250x250.jpg"},
        {itemId: "b01", itemName: "Water", itemPrice: 0.95, itemCount: 2, imgUrl: "http://cn.rocwellwater.com/images/500ml.gif"},
        {itemId: "b02", itemName: "Chewing gum", itemPrice: 1.25, itemCount: 3, imgUrl: "http://img.bridgat.com/small/ee/n1/A1-Trendy_Butane_Lighter_Chewing_Gum_Shape_Metal_Housing_YellowGreen_1.jpg"},
        {itemId: "b03", itemName: "Chips", itemPrice: 1.30, itemCount: 4, imgUrl: "http://nellore.freedomcart.com/image/cache/data/Products/Daily%20needs/lays-potato-chips-250x250.jpg"}
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
    const addedValue = parseFloat(e.target.value, 10);
    const newValue = currentValue + addedValue;    

    if(isPurchaseAlowed){
      this.setState({
        money: parseFloat(newValue.toFixed(2), 10)
      });      
    } else {
      alert("One item at the time please. Collect your money first, and then make new purchase.");
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
    const currentState = this.state.items.slice(0);
    let isPurchaseAlowed = this.state.isPurchaseAlowed;
    let currentMoney = this.state.money;
    const index = e.target.dataset.value;
    const howMany = currentState[index].itemCount;
    const whichItem = currentState[index].itemName;
    const itemPrice = currentState[index].itemPrice;

    // console.log(e.target);

    if (howMany > 0 && isPurchaseAlowed && itemPrice > currentMoney) {
      alert("Sorry, you don't have enough money :( ");
    } 

    if(!isPurchaseAlowed){
      alert("One item at the time please. Collect your money first, and then make new purchase.");
    }

     if( isPurchaseAlowed && howMany < 1){
      alert("Out of stock. Would you like something else?");
    }

    if(isPurchaseAlowed && howMany > 0 && currentState[index].itemCount > 0 && itemPrice <= currentMoney){       
      currentState[index].itemCount -= 1;    
      currentMoney -= itemPrice;
      isPurchaseAlowed = !isPurchaseAlowed;

      this.setState({
        items: currentState,
        money: parseFloat(currentMoney.toFixed(2), 10),
        isPurchaseAlowed,
        justPurchased: whichItem 
      });
    }

    // console.log("currentMoney: ", currentMoney, "howMany: ", howMany, "itemPrice: ", itemPrice, "whichItem: ", whichItem );
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-center">Vending machine app</h1>
          <p className="well">Add money, purchase by clicking on item and have fun!</p>
          <Items  items={this.state.items} purchaseItem={this.purchaseItem} />
          <Saldo  coins={this.state.coins} 
                  money={this.state.money} 
                  addValue={this.addValue}
                  moneyBack={this.moneyBack}
                  lastPurchased={this.state.justPurchased}
          />
          <p className="text-right">Made with ♥ by <a href="http://danko-m.github.io/" target="_blank">Danko</a></p>
        </div>
      </div>
    );
  }
}

export default App;
