import React, { useEffect, useState } from "react";
import "./styles.css";

const InputCash = (props) => {
  const [value, setValue] = useState(0);
  const [isPrintShown, setIsPrintShown] = useState(false);

  useEffect(() => {
    if (props.val2 === "") {
      alert("must be a value");
    }
  }, [props.val2]);

  const addNum = (val, val2) => {
    let a = val;
    let b = val2;
    if (a > b || b === "") {
      setIsPrintShown(false);
      alert("تأكد من المبلغ المستلم");
      props.handleRestCount2();

      return;
    }
    setValue(a - b);
    setIsPrintShown(true);
  };

  const handleRest = () => {
    setValue(0);
    props.handleRestCount2();
    setIsPrintShown(false);
  };

  return (
    <div className="App">
      <button
        onClick={() => addNum(props.values, props.values2)}
        style={{
          border: "1px solid gray",
          width: "108px",
          padding: "0 2px",
          height: "25px",
          fontSize: "20px"
        }}
      >
        المتبقي للعميل
      </button>
      <p>
        {" "}
        ({value <= 0 ? (value * -1).toFixed(2) : ""})<span>ريال سعودي</span>
      </p>
      {isPrintShown ? (
        <button onClick={handleRest}>طباعة الفاتورة </button>
      ) : null}
    </div>
  );
};

export default InputCash;
