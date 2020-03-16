import React, { useState } from "react";
import Play, { Certified } from "../components/Play"
import "../styles/play.css"
const Food1 = require('../assets/food1.png')
const Food2 = require('../assets/food2.png')
// export default function Feeding(props) {
    

    const Feeding = props => {

    const [isLoading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        setLoading(true);

        try {
            console.log('API request goes here');
        } catch(error) {
            console.log('Error happened: ', error.message)
        }
    }
    let data = [{
    picture: Food2,
    title: "Daily Food Schedule",
    morning: "Breakfast at 8am",
    morning: "Dinner at 5pm",
    experience: "400"
    },
    {
   picture: Food1,
    title: "Fresh Water",
    description: "Before you go to school, clean my bowl and add fresh water",
    water: "Re-fill my water",
    experience: "400"
    },
    
    ]
    return(
        <div>
            <h2>Feeding Page</h2>
            {/* put UI here */}
            <button onClick={() => handleSubmit()}>Submit Request</button>
       
     {data.map((quest,index) => {
       return(
        
         <Play
         {...quest}
         />
       )

     })}
    
 
    </div>
  );
};
       
       

export default Feeding