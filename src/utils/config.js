import twix from '../img/twix.jpg';
import coke from '../img/coca-cola.jpg';
import chocolate from '../img/chocolate.jpg';
import doritos from '../img/doritos.jpg';
import peanuts from '../img/peanuts.jpg';
import water from '../img/water.gif';
import chewingGum from '../img/chewing-gum.jpg';
import chips from '../img/chips.jpg';
import Hersheys from '../img/Hersheys.jpg';
import Pepsi from '../img/Pepsi.jpg';
import Sprite from '../img/Sprite.jpg';
import Mirinda from '../img/Mirinda.jpg';
import MountainDew from '../img/MountainDew.jpg';
import KickStart from '../img/KickStart.jpg';

export const vendingItems = [
    {itemId: "b03", itemName: "Pepsi", itemPrice: 1.30, itemCount: 4, imgUrl: Pepsi},
    {itemId: "a02", itemName: "Coke", itemPrice: 2.4, itemCount: 3, imgUrl: coke},
    {itemId: "b01", itemName: "Water", itemPrice: 0.95, itemCount: 2, imgUrl: water},
    {itemId: "b04", itemName: "Sprite", itemPrice: 1, itemCount: 1, imgUrl: Sprite},
    {itemId: "a03", itemName: "Mirinda", itemPrice: 1.5, itemCount: 4, imgUrl: Mirinda},
    {itemId: "a04", itemName: "MountainDew", itemPrice: 1.40, itemCount: 1, imgUrl: MountainDew},
    {itemId: "b02", itemName: "KickStart", itemPrice: 1.25, itemCount: 3, imgUrl: KickStart},
    // {itemId: "a01", itemName: "Hersheys", itemPrice: 1, itemCount: 2, imgUrl: Hersheys},
  ];

  export const vendingCoins  = [0.05, 0.10, 0.25, 0.50, 1];