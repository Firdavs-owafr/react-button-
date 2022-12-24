import "./App.css";
import Header from "../Header/Header";

function App() {
  let dec = "DEC",
    inc = "INC",
    rand = "Random",
    rest = "Rest";

  return (
    <div className="App">
      <Header inc={inc} dec={dec} rand={rand} rest={rest} />
    </div>
  );
}

// JSX

export default App;
