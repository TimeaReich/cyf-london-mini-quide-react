import "./App.css";
import Dropdown from "./Dropdown";
import CategoriesButtons from "./CategoriesButtons";
import SearchResult from "./SearchResult";
import { useEffect, useState } from "react";

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [category, setCategory] = useState("");
  const [data, setData] = useState("");

  console.log(selectedCity);
  console.log(category);
  console.log(data);

  useEffect(() => {
    fetch(`https://cyf-london-mini-guide.glitch.me/${selectedCity}/${category}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [category]);
  return (
    <div className="App">
      <h1>London Mini Guide</h1>
      <Dropdown setSelectedCity={setSelectedCity} />
      <CategoriesButtons category={category} setCategory={setCategory} />
      <SearchResult data={data} />
    </div>
  );
}

export default App;
