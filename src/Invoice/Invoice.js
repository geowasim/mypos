// import React, { useRef } from "react";
// import ReactToPrint from "react-to-print";
// import "./Invoice.css";

// import { ComponentToPrint } from "../ComponentToPrint/ComponentToPrint";

// const Invoice = (props) => {
//   const { cartItems, totalPrice } = props;
//   const componentRef = useRef();
//   let aaa = false;
//   return (
//     <div>
//       <ReactToPrint
//         trigger={() =>
//           aaa ? null : <button className="printInv">Print Invoice</button>
//         }
//         content={() => componentRef.current}
//       />
//       <ComponentToPrint
//         ref={componentRef}
//         cartItems={cartItems}
//         totalPrice={totalPrice}
//       />
//     </div>
//   );
// };

// export default Invoice;
