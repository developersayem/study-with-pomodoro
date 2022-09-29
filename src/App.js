import "./App.css";
import Activities from "./Components/Activities/Activities";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="header-section">
          <Header></Header>
        </div>
        <div className="activities-section">
          <Activities></Activities>
        </div>
      </div>
    </div>
  );
}

export default App;
