import { useState } from "react";

export default function GroceryInput({ fetchData }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    fetchData(text);
    setText("");
  };
  return (
    <div>
      <input
        placeholder="Add Item"
        type="text"
        value={text}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}
