import React, {Component} from 'react';
import Item from './Item';


export default class Items extends Component {
	render(){		
		const {items, purchaseItem} = this.props;
		const allItems = items.map((item, i) => {
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
}

Items.propTypes = {
  items: React.PropTypes.array,
  purchaseItem: React.PropTypes.func
}



