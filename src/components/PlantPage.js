import React,{useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchedPlant, setSearchPlant] = useState("");
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((resp)=>resp.json())
    .then((data)=>setPlants(data))

  },[])
  function handleAddPlant(newPlant){
    console.log(plants,newPlant)
    const newPlants = [...plants ,newPlant]
    setPlants(newPlants)
    //console.log(newPlants)

  }
  function handleSearch(newsearchedPlantName){
    console.log("searchedPlant",newsearchedPlantName)
    setSearchPlant(newsearchedPlantName)
    console.log("NowsearchedPlant",searchedPlant)
    const updatedPlants = plants.filter((plant)=>
    plant.name.toLowerCase().includes(searchedPlant.toLowerCase()))
    console.log(updatedPlants)
  }
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search onSearchSet= {handleSearch}/>
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
