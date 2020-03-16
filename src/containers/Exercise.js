import React, { useState } from "react";
import Play, { Certified } from "../components/Play"
import "../styles/play.css"
const Exercise1 = require('../assets/exercise1.png')
const Exercise2 = require('../assets/exercise2.png')
// export default function Feeding(props) {
    

    const Exercise = props => {

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
    picture: Exercise1,
    title: "Walk Santos",
    morning: "Before you go to school",
    morning: "Before it gets dark",
    experience: "400"
    },
    {
   picture: Exercise2,
    title: "I need to run",
    description: "When you get home let me go outside to run",
    experience: "400"
    },
    
    ]
    return(
        <div>
            <h2>Walk</h2>
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
       
       

export default Exercise;