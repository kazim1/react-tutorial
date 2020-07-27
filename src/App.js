import React from 'react';
import Cart from './components/Cart';
import ProductList from './components/ProductList';

function App() {

  const [cart, setCart] = React.useState({"items": [], "total": 0});
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {

    setProducts([
        {
            "id": 1,
            "title": "Test Product 1",
            "description": "Test Description or my product blah blah 2",
            "img": "https://via.placeholder.com/300.png/f2f2f2/000?text=1"
        },
        {
            "id": 2,
            "title": "Test Product 2",
            "description": "Test Description or my product blah blah 2",
            "img": "https://via.placeholder.com/300.png/f2f2f2/000?text=2"
        },
        {
            "id": 3,
            "title": "Test Product 3",
            "description": "Test Description or my product blah blah 2",
            "img": "https://via.placeholder.com/300.png/f2f2f2/000?text=3"
        },
        {
            "id": 4,
            "title": "Test Product 4",
            "description": "Test Description or my product blah blah 2",
            "img": "https://via.placeholder.com/300.png/f2f2f2/000?text=4"
        }
    ]);

  }, []);

  const addItemToCart = (product) => {
    cart.items = [...cart.items, product];
    setCart({...cart});
  };

  const removeItemFromCart = (index) => {
      console.log(index);
      const items = [...cart.items];
      items.splice(index, 1);
      cart.items = items;
      setCart({...cart});
  }

  return (
    <div className="wrap">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-8">
                    <h3>Products</h3>
                    <ProductList 
                        products={products}
                        addToCart={(product) => addItemToCart(product)}
                    />
                </div>
                <div className="col-sm-3">
                    <h3>Cart</h3>
                    <Cart 
                        cart={cart} 
                        onItemRemove={(itemIndex) => removeItemFromCart(itemIndex)} 
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
