import React from "react";
import { useState } from "react";

const Second = () => {
  const [initProds, setInitProds] = useState([
    { id: 1, name: "prod1", catg: "catg1", cost: 100 },
    { id: 2, name: "prod2", catg: "catg2", cost: 200 },
    { id: 3, name: "prod3", catg: "catg3", cost: 300 },
  ]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState(0);

  const [editedId, setEditedId] = useState(null);

  const removeItem = (id) => {
    setInitProds(initProds.filter((item) => item.id != id));
  };

  const editItem = (item) => {
    setEditedId(item.id);
    setName(item.name);
    setCategory(item.catg);
    setCost(item.cost);
  };

  const handleChange = (value, set, prop) => {
    set(value);
    if (editedId) {
      setInitProds(
        initProds.map((prod) =>
          prod.id === editedId ? { ...prod, [prop]: value } : prod
        )
      );
    }
  };

  const addItem = () => {
    setEditedId(null);
    setInitProds([
      ...initProds,
      {
        id: Math.random().toString(8).slice(2),
        name: name,
        cost: cost,
        catg: category,
      },
    ]);
    setName("");
    setCategory("");
    setCost(0);
  };

  return (
    <div>
      <br />
      <table border={1}>
        {initProds.map((item) => (
          <tr>
            <td>id: {item.id}</td>
            <td>name: {item.name}</td>
            <td>catg: {item.catg}</td>
            <td>cost: {item.cost}</td>
            <td>
              <button onClick={() => removeItem(item.id)}>Удалить</button>
            </td>
            <td>
              <button
                onClick={() => {
                  editItem(item);
                }}
              >
                Редактировать
              </button>
            </td>
          </tr>
        ))}
      </table>
      <br />

      <div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) =>
              handleChange(event.target.value, setName, "name")
            }
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(event) =>
              handleChange(event.target.value, setCategory, "catg")
            }
          />
        </div>
        <div>
          <label>Cost:</label>
          <input
            type="number"
            value={cost}
            onChange={(event) =>
              handleChange(event.target.value, setCost, "cost")
            }
          />
        </div>
        <button onClick={addItem}>Добавить</button>
      </div>
    </div>
  );
};

export default Second;
