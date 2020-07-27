import React from 'react';

const Product = (props) => {
  return (
    <div className="col-sm-4">
      <div className="card" style={{marginBottom: 20}}>
        <img className="card-img-top" 
          src={props.product.img} 
          alt="" style={{maxWidth: '100%'}} />
        <div className="card-body">
          <h5 className="card-title">{props.product.title}</h5>
          <p className="card-text">
            {props.product.description}
          </p>
          <button onClick={() => 
            props.addToCart && props.addToCart(props.product)
          } className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;