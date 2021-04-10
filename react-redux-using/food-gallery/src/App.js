import { useEffect, useState } from "react";
import FoodCards from "./components/FoodCards";
import { connect } from "react-redux";
import { getSearchedFoods } from "./store/food/foodAction";
import Searchbar from "./components/Searchbar";
function App({ getVal }) {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("garlic");

  const handleClick = (e) => {
    setSearch(input);
    setInput("");
  };

  useEffect(() => {
    getVal(search);
  }, [search]);

  return (
    <div className="App">
      <Searchbar value={input} onChange={setInput} onClick={handleClick} />
      <FoodCards />
    </div>
  );
}

const mapDispatchToProps = {
  getVal: getSearchedFoods,
};

export default connect(null, mapDispatchToProps)(App);
