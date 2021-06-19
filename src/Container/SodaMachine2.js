import React, { useState, useEffect} from 'react';
import { vendingItems, vendingCoins} from '../utils/config';
import Items from '../Components/functionalComponents/Items';
import MechanicalSystem from '../Components/functionalComponents/MechanicalSystem';
import TotalAmount from '../Components/functionalComponents/TotalAmount';
import Dispense from '../Components/functionalComponents/Dispense';
// import '../css/bootstrap.min.css';
import  '../css/App.css';
import {config} from  '../utils/config';
import logo from '../img/react.png';

function Sodamachine() {
    // const [loading, isLoading] = useState[true];
    const [data, setData] = useState({});
    // const [message, setMessage]= useState[''];
    const [coins, setCoins] = useState({});
    const initialMoney = 0;
    const [money, setMoney] = useState(initialMoney);
    const [isPurchaseAllowed, setIsPurchaseAllowed] =  useState(true);
    const [justPurchased, setJustPurchased] = useState('');
    const [items, setItems] = useState({});

    const setDataValue = () =>{
      setData({items, money,coins, isPurchaseAllowed, justPurchased});   
    }

    useEffect(() => {
      setItems(vendingItems);
      setIsPurchaseAllowed(true);
      setJustPurchased('');
      setCoins(vendingCoins);
      setMoney(initialMoney);
      setDataValue();
      // eslint-disable-next-line
    }, []);


   const addValue = (e) => {
       const {money,isPurchaseAlowed, justPurchased} = data;
       if(e)
       {
       const currentValue = money;
       const addedValue = parseFloat(e.target.value, 10);
       const newValue = currentValue + addedValue;    
   
       if(isPurchaseAlowed){
        setMoney(parseFloat(newValue.toFixed(2), 10));  
        
       } else {
         alert(`One item at a time please. Collect your ${justPurchased.toLowerCase()} first, and then make new purchase.`);
       }
       setDataValue();  
    }
     }

    const moneyBack = () => {
        setMoney(initialMoney);
        setIsPurchaseAllowed(true);
        setJustPurchased('');
        setDataValue();
      }

      const  purchaseItem = (e) => {
        const{items,money,isPurchaseAlowed, justPurchased} = data;
        if(e)
        {
            e?.preventDefault();
            const currentData = items?.slice(0);
            let currentMoney = money;
            const index = e?.target?.getAttribute('data-value');
            const howMany = currentData[index].itemCount;
            const whichItem = currentData[index].itemName;
            const itemPrice = currentData[index].itemPrice;
        
            if (howMany > 0 && isPurchaseAlowed && itemPrice > currentMoney) {
              alert("It looks like you don't have enough money. Insert some coins.");
            } 
        
            if(!isPurchaseAlowed){
              alert(`One item at a time please. Collect your ${justPurchased.toLowerCase()} first, and then make new purchase.`);
            }
        
             if( isPurchaseAlowed && howMany < 1){
              alert("Out of stock. Would you like something else?");
            }
        
            if(isPurchaseAlowed && howMany > 0 && currentData[index].itemCount > 0 && itemPrice <= currentMoney){       
             currentData[index].itemCount -= 1;    
              currentMoney -= itemPrice;
    
              setItems(currentData);
              setMoney(parseFloat(currentMoney.toFixed(2), 10));
              setIsPurchaseAllowed(!isPurchaseAlowed);
              setJustPurchased(whichItem);
            }
        }
      }


      return (
        <div className="App">
          <div className="container">
            <h1 className="text-center">Soda Machine app <img src={logo} alt=".." title="ReactJS" height="50"/></h1>
            <div className="alert alert-info text-center" role="alert">
              <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> clicking on item, adds virtual money.!</div>
            <Items  items={items} purchaseItem={() => purchaseItem} />
            <MechanicalSystem  coins={coins} 
                    money={money} 
                    addValue={() => addValue}
                    moneyBack={() => moneyBack}
                    lastPurchased={justPurchased}
            >
              <TotalAmount money={money} />
              <Dispense money={money} 
                            moneyBack={() => moneyBack} 
                            lastPurchased={justPurchased} 
              />
            </MechanicalSystem>
            <p className="author">Made with <span className="text-danger">♥</span>/<img src={logo} alt=".." height="16" title="ReactJS" /> by <a href="http://dankoknad.github.io/" target="_blank">Danko</a></p>
          </div>
        </div>
      );
}

export default Sodamachine;
