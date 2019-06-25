import React from 'react'

class Product extends React.Component{
    handleClick = () => {
        this.props.addToCart(this.props.product)

    }    
    render(){
        const {name, price, url} = this.props.product
        return(
            <div className="product-conatiner">
                <div className="image-conatiner">
                    <img className="image" src={url} alt="product-Image"/>
                </div>
                <div className="product-details">
                    <div className="name">{name}</div>
                    <div className="price">{price}</div>
                    <div className="btn" onClick={this.handleClick}>Add To Cart</div>
                </div>
            
            </div>
        )
    }
}
export default Product