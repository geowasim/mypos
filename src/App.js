import Products from "./products/Products";
import "./App.css";
import Item from "./Item/Item";
import { useEffect, useState } from "react";
import Basket from "./cart/Cart";
import Invoice from "./Invoice/Invoice";
// import PerfumeContext from "./context/ProductContext";

function App() {
  const [item, setItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const findItem = (id) => {
    setItem(id);
  };

  // add+
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  // remove-
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Products findItem={findItem} />
      </header>
      <Item item={item} onAdd={onAdd} />
      <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      {/* <Invoice cartItems={cartItems} totalPrice={totalPrice} /> */}
    </div>
  );
}

export default App;

//  // const [serial, setSerial] = useState([{ sn: 22, am: 500 }]);

// useEffect(() => {
//   if (serial) {
//     localStorage.setItem("SN", JSON.stringify(serial));
//   }
// }, [serial]);

// const handleData = () => {
//   setSerial((serial) => [...serial, { sn: 1022, am: 600 }]);
// };
