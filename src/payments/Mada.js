import React, { useEffect, useState } from "react";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Mada(props) {
  const count = props.itemsPrice;
  const [opp, setOpp] = useState(false);
  useEffect(() => {
    if (opp) {
      setTimeout(() => {
        alert("تأكد من تحويل المبلغ");
      }, 1000);
    }
  }, [opp]);

  function handlePay() {
    setOpp(true);
  }

  return (
    <div className="App">
      <h2>Mada! </h2>
      <FontAwesomeIcon
        icon={faCreditCard}
        style={{ fontSize: "35px", marginRight: "10px" }}
      />

      <h3>
        المبلغ المطلوب : <span> {count} ريال </span>
      </h3>
      <button onClick={handlePay}>اطبع الفاتورة</button>
    </div>
  );
}
