import React from 'react'
import ProductList from './Component/ProductList';
import CartList from './Component/CartList';

class App extends React.Component{
     constructor(props){
       super(props);
       this.state={
         cartList : []
       }
     }

     addToCart=(product)=> {
      const tempList=this.state.cartList

      let productFlag=false;

      tempList.forEach((el,i) => {
          if(product.id===el.id){
            tempList[i].qty +=1
            productFlag=true;
          }        
      })
      if(!productFlag){
        product.qty=1;
        tempList.push(product)
      }
      this.setState({
        cartList : tempList
      })
     }

  render(){    
    return(
      <div className="App">
        <ProductList addTocart={this.addToCart} /> 
        <CartList cartList={this.state.cartList}/>        
      </div>
    );
  }
}
export default App;
