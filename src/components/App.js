import React, {useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  function handleSetPlants(plants){
    setPlants(plants)
  }
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onSetPlants={handleSetPlants}/>
    </div>
  );
}

export default App;
