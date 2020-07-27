import React from 'react';
import Product from './Product';

const ProductList = (props) => {

  const {products} = props;

  const _products = [];

  products.forEach((product) => {
    _products.push(
      <Product 
        product={product} 
        key={product.id} 
        addToCart={(product) => props.addToCart(product)} 
      />);
  });

  return (
    <div className="row">
        {_products}
    </div>
  );
}

export default ProductList;