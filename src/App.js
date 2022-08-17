import Products from "./products/Products";
import "./App.css";
import Item from "./Item/Item";
import { useState, useEffect } from "react";
import Basket from "./cart/Cart";
// import PerfumeContext from "./context/ProductContext";

function App() {
  const [item, setItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("SN")) || [
      {
        sn: `${new Date()
          .toLocaleDateString()
          .split("")
          .filter((x) => x !== "/")
          .join("")}`,
        am: "000",
        date: `${new Date().toLocaleDateString()}`,
      },
    ]
  );

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("SN"));
    console.log(items);
    if (items) {
      setData((data) => data, items);
    }
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (data) {
      localStorage.setItem("SN", JSON.stringify(data));
    }
  }, [data]);

  const handleData = () => {
    const serialN = Number(data[data.length - 1].sn) + 1;
    const am = Math.floor(Math.random() * 10);

    setData((data) => [...data, { sn: serialN, am: am }]);
  };

  const resetCartItems = () => {
    setCartItems([]);
  };
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
      <header
        className="App-header"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Products findItem={findItem} />
        {/* <button onClick={handleData}>,,,,,,,</button>
        {data.map((item) => (
          <div
            key={item.sn + 1}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p>SN/{item.sn}/</p>
            <p>Ammount:/{item.am}/</p>
          </div>
        ))} */}
      </header>
      <Item item={item} onAdd={onAdd} />
      <Basket
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        resetCartItems={resetCartItems}
        handleData={handleData}
      />
      {/* <Invoice cartItems={cartItems} totalPrice={totalPrice} /> */}
    </div>
  );
}

export default App;
