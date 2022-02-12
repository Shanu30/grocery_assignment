import { useState } from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";

export default function Grocery() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "list"
    }
  ]);
  const fetchData = (text) => {
    const payload = {
      id: data.length + 1,
      title: text
    };
    setData([...data, payload]);
  };
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <div>
      <GroceryInput fetchData={fetchData} />
      {data?.map((item) => {
        return (
          <GroceryList
            key={item.id}
            id={item.id}
            title={item.title}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}
