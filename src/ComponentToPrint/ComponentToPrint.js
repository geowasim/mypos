import React from "react";
import MyLogo from "./logoForPrint.png";
import "./ComponentToPrint.css";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  const { cartItems, itemsPrice } = props;

  return (
    <div className="fatorah" ref={ref}>
      <img src={MyLogo} alt="logo" style={{ boxShadow: "none" }} />
      <h3> شركة كانديـــلا للعطور</h3>
      <br />
      <div className="perData">
        <p>معرض صناع العطور الثاني - الطائف</p>
        <p>Simplified Vat Invoice</p>
        <p>فاتورة ضريبية مبسطة</p>

        <p>Vat: XXXXXXXX :الرقم الضريبي</p>

        <p>C.R: YYYYYYY :س .ت</p>
      </div>
      <div className="preDataNP">
        <p>Customer: Expo</p>
        <p>Phone: </p>
      </div>
      <div className="preDataNP preDataNP_1">
        <p>Flat: </p>
        <p>Building:</p>
      </div>
      <div className="preDataNP preDataNP_2">
        <p>Street: </p>
        <p>Block: </p>
      </div>
      <br />
      <hr />
      <br />
      <div className="casher">
        <p style={{ display: "none" }}>Cashier: EP-Othaim Al Ahsa-Al Ahsa</p>
        <p>Salesperson: EXPO </p>
        <div className="date">
          <p>{new Date().toLocaleString()}</p>
          <span>order# {Date.parse(new Date())}</span>
        </div>
      </div>
      <div ref={ref} className="p-5">
        <table className="table">
          <thead>
            <tr>
              <td>Description</td>
              <td>Qty</td>
              <td>Price</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.length !== 0
              ? cartItems.map((cartProduct, key) => (
                  <tr key={key}>
                    <td>{cartProduct.title} عطر- perfume</td>
                    <td>{cartProduct.qty}</td>
                    <td>{cartProduct.price}</td>
                    <td>{cartProduct.qty * cartProduct.price}</td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
        <p>VAT 15% {Math.ceil(itemsPrice * 15) / 100}</p>
        <h4 className="px-2">Total without VAT {Math.ceil(itemsPrice)} SAR</h4>
        <h4 className="px-2">
          Total Amount include VAT:{" "}
          {Math.ceil((itemsPrice * 15) / 100 + itemsPrice)} SAR
        </h4>
        <p>paymentnmethod : Cash(كاش)</p>
        <p>paymentnmethod : Mada(مدى)</p>
      </div>
    </div>
  );
});
