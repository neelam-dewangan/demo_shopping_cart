import React from 'react'
import CartRow from './CartRow';
import Cartlist from './CartList.css'

class CartList extends React.Component{
   render(){
       return(
           <div className="cart-list">
           <h1>Cart</h1>
              <CartRow name="Name" price="Price" qty="Quantity"/>
              {
                  this.props.cartList.map((product, i) =>{
                      return <CartRow name={product.name} price={product.price} qty={product.qty}/>
                  })
              }
           </div>
       );
   }    
}
export default CartList;