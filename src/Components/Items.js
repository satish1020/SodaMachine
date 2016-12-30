import React, {Component} from 'react';


export default class Items extends Component {
	render(){		
		const {items, purchaseItem} = this.props;
		const allItems = items.map((item, i) => {
			return (
				<div onClick={purchaseItem} data-value={i} key={item.itemId} className="col-xs-6 col-sm-3">
					{item.itemCount ? 
						<div className="items-left bg-info" data-value={i}>Available items: {item.itemCount}</div> : 
						<div className="items-left bg-danger" data-value={i}>Out of stock</div>
					}
		      <img className="img-responsive center-block img-max-150" src={item.imgUrl} alt=".." title={`Purcase this ${item.itemName}`} data-value={i} />
		      <div className="item bg-warning" data-value={i}>{item.itemName}</div>
		      <div className="item-price bg-success" data-value={i}>Price: ${item.itemPrice}</div>
		    </div>
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