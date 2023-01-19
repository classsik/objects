import React from "react";
import { useState } from "react";

const First = () => {
  const [obj, setObj] = useState({
    prop1: "prop1",
    prop2: "prop2",
    prop3: "prop3",
  });

  const handleChange = (prop) => {
    let copy = Object.assign({}, obj);
    copy[prop] = "test";
    setObj(copy);
  };

  return (
    <div>
      <p>{obj.prop1}</p>
      <p>{obj.prop2}</p>
      <p>{obj.prop3}</p>
      <button onClick={() => handleChange("prop1")}>1</button>
      <button onClick={() => handleChange("prop2")}>2</button>
      <button onClick={() => handleChange("prop3")}>3</button>
    </div>
  );
};

export default First;
