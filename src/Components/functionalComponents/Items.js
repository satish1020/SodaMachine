import React, {Component} from 'react';
import Item from './Item';


const Items= ()=>{		
		const {items, purchaseItem} = this.props;
		const allItems = items && items.map((item, i) => {
			return (
				<Item purchaseItem={purchaseItem} item={item} key={item.itemId} i={i} />
		  )
		})
		return (
			<div className="row items-container">
		    {allItems}
		  </div>
		)
	}

export default Items;




