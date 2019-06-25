import React from 'react'

class CartRow extends React.Component{
    render(){
        const {name, price, qty}= this.props
        return(
            <div className="row-container">       
                <div className="cell">{name}</div>   
                <div className="cell">{price}</div>   
                <div className="cell">{qty}</div>               
            </div>
        )
    }
}

export default CartRow;
