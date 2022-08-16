import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "../ComponentToPrint/ComponentToPrint";

import "./Cart.css";
import MyImage from "../img/QandellaCompanyLogo1.png";
import Payment from "../payments/Payment";

const Basket = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const [method, setMethod] = useState("Mada");
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalItems = cartItems.reduce((a, c) => a + c.qty, 0);

  // const taxPrice = itemsPrice * 0.15;
  // const bagPrice = itemsPrice > 300 ? 0 : 7;
  // const totalPrice = itemsPrice +;

  const componentRef = useRef();
  const handleReactToPrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrint = () => {
    handleReactToPrint();
  };

  const checkPaymentMethod = (v) => {
    setMethod(v);
  };

  return (
    <div className="basketContainer">
      <div className="basket">
        <h2 className="basketName">السلة</h2>
        <div>{cartItems.length === 0 && <div>السلة فارغة </div>}</div>
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="basketTitle">{item.title}</div>
            <div className="basketIND">
              <button onClick={() => onAdd(item)} className="itemButton add">
                +
              </button>
              <button
                onClick={() => onRemove(item)}
                className="itemButton remove"
              >
                -
              </button>
            </div>
            <div className="basketQT">
              {item.qty} X {Math.ceil(item.price)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <div style={{ display: "none" }}>
              {/* ---------- */}
              <ComponentToPrint
                cartItems={cartItems}
                itemsPrice={itemsPrice}
                ref={componentRef}
                checkPaymentMethod={checkPaymentMethod}
              />
              {/* ------------ */}
            </div>
            <br />
            <hr />
            <br />
            <div className="row ">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "15px 15px",
                }}
              >
                <span>السعر الاجمالي</span> قبل الضريبة
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "15px",
                }}
              >
                <span> ريال سعودي</span> {Math.ceil(itemsPrice.toFixed(2))}{" "}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "15px",
                }}
              >
                {" "}
                <span>عدد القطع</span> {totalItems}{" "}
              </div>
            </div>
          </>
        )}
        <br />
        <hr />
        {cartItems.length !== 0 && (
          <div
            style={{
              display: "flex",
              width: "200px",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Payment
                itemsPrice={itemsPrice}
                checkPaymentMethod={checkPaymentMethod}
              />
              <button className="itemButton" onClick={handlePrint}>
                الدفع{" "}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="cartLogo">
        <img src={MyImage} alt="myImage" />
        <div className="copyRights">
          <p>
            {" "}
            Copyright <span>&copy;</span> reserved for Qandella Company -{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Basket;
