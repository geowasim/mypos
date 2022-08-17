import { useEffect, useState } from "react";

export default function Invoices() {
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

  return (
    <>
      <button onClick={handleData}>,,,,,,,</button>

      {data.map((item) => (
        <div
          key={item.sn + 1}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p>SN/{item.sn}/</p>
          <p>Ammount:/{item.am}/</p>
        </div>
      ))}
    </>
  );
}
