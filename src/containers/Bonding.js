import React, { useState } from "react";
import Play, { Certified } from "../components/Play"
import "../styles/play.css"
const Exercise1 = require('../assets/exercise1.png')
const PuppyLove = require('../assets/puppy_love.png')
// export default function Feeding(props) {
    

    const Bonding = props => {

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
    title: "Teach me tricks",
    morning: "Learn how to sit",
    morning: "Learn how to stay",
    experience: "400"
    },
    {
   picture: PuppyLove,
    title: "Let's have fun!",
    description: "Can we just run and play chase",
    description: "Can we play catch",
    experience: "400"
    },
    
    ]
    return(
        <div>
            <h2>Bond with me</h2>
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
       
       

export default Bonding;