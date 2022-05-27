import "./App.css";
import Dropdown from "./Dropdown";
import CategoriesButtons from "./CategoriesButtons";
import SearchResult from "./SearchResult";

function App() {
  return (
    <div className="App">
      <h1>London Mini Guide</h1>
      <Dropdown />
      <CategoriesButtons />
      <SearchResult />
    </div>
  );
}

export default App;
