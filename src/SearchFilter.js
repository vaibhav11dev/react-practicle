import "./App.css";
import { useState } from "react";

function SearchFilter() {
  const names = [
    "bananna",
    "baapple",
    "mango",
    "orange",
    "baspicy",
    "Apricot",
    "Blueberry",
    "baCoconut",
    "Cherry",
    "Apricot",
  ];

  const [result, setResult] = useState(names);

  const serchFilter = (e) => {
    let query = e.target.value;

    if (query === "") {
      setResult(names);
    } else {
      let filter = names.filter((name) => name.includes(query));
      setResult(filter);
    }
  };

  return (
    <div className="App">
      <input type="text" name="search" onChange={serchFilter} />

      {result.map((filteredName) => (
        <li>{filteredName}</li>
      ))}
    </div>
  );
}

export default SearchFilter;
