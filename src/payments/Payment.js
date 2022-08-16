import { useEffect, useState } from "react";
import Cash from "./Cash";
import Mada from "./Mada";
import "./styles.css";
import "./payments.css";

export default function Payment(props) {
  const { itemsPrice, checkPaymentMethod } = props;
  console.log(props);
  const [showCashe, setShowCashe] = useState(false);
  const [showMethod, setShowMethod] = useState("Mada");

  if (showMethod === "Mada") {
    checkPaymentMethod("Mada");
  } else {
    checkPaymentMethod("Cash");
  }
  const handleCashe = () => {
    setShowCashe(!showCashe);
    if (!showCashe) {
      setShowMethod("Cash");
    } else {
      setShowMethod("Mada");
    }
    console.log(showMethod);
  };
  return (
    <div className="payments">
      <br />
      <br />
      <br />
      {showCashe ? (
        <Cash itemsPrice={itemsPrice} />
      ) : (
        <Mada itemsPrice={itemsPrice} />
      )}
      <button
        onClick={handleCashe}
        style={{ position: "absolute", top: "25px", left: "auto" }}
      >
        {showCashe ? (
          <>" Mada الرجوع إلى مدى"</>
        ) : (
          <>"cash/ لتغير إلى الدفع كاش"</>
        )}
      </button>
    </div>
  );
}

/**
 * 
 * {showCashe ? (
        <Cashe />
      ) : showMada ? (
        <button
          onClick={handleCashe}
          style={{ position: "absolute", top: "200px", left: "100px" }}
        >
          Mada
        </button>
      ) : null}
      {showMada ? (
        <Mada />
      ) : showCashe ? (
        <button
          onClick={handleCashe}
          style={{ position: "absolute", top: "200px", left: "100px" }}
        >
          Cashe
        </button>
      ) : null}
 */
