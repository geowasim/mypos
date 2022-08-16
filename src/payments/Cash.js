import React, { useState } from "react";
import InputCash from "./InputCash";
import { faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cash(props) {
  const count = props.itemsPrice;
  const { isCach, handlePrint } = props;
  console.log("caa", props);
  const [count2, setCount2] = useState(null);

  const handleaddNumber2 = (e) => {
    setCount2(e.target.value);
    if (e.target.value === "") {
      setCount2(0);
    }
  };

  const handleRestCount2 = () => {
    setCount2(null);
  };

  return (
    <div className="App">
      <h2>
        Cash <span>كاش</span>
      </h2>

      <h3>
        المبلغ المطلوب : <span> {count} ريال </span>
      </h3>
      <input
        onChange={(e) => handleaddNumber2(e)}
        value={count2 ? count2 : ""}
        type="number"
        placeholder="المدفوع نقداً"
        required
      />
      <InputCash
        handleRestCount2={handleRestCount2}
        values={count ? count : ""}
        values2={count2 ? count2 : ""}
        isCach={isCach}
        handlePrint={handlePrint}
      />
    </div>
  );
}
