import React, {Component} from 'react';

const Item = () => {
		const {purchaseItem, item, i} = this.props;
		return (
			<div className="col-xs-6 col-sm-3">
				{item.itemCount ? 
					<div className="items-left bg-success text-success">Available items: {item.itemCount}</div> : 
					<div className="items-left bg-danger text-danger">Out of stock</div>
				}
	      <img className="img-responsive center-block img-max-150" src={item.imgUrl} alt=".." />
	      <div className="item bg-warning text-warning">{item.itemName}</div>
	      <div className="item-price bg-info text-info">Price: ${item.itemPrice}</div>
	      <a onClick={purchaseItem} data-value={i} className="btn-purchase" href="#"></a>
	    </div>
		)
	}
export default Item;
