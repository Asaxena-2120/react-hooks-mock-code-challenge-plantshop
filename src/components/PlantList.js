import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  
  //console.log(plants)
  const plantsList = plants.map((plant)=> (
    <PlantCard key={plant.name} name={plant.name} image={plant.image} price={plant.price}/>
  )

  )
  return (
    <ul className="cards">{plantsList}</ul>
  );
}

export default PlantList;
