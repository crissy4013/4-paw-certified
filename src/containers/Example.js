import React, { useState } from "react";

export default function Feeding(props) {
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
        picture: Santos,
        title: "Feed the pupper",
        description: "Breakfast at 8am",
        experience: "400"
      },
      {
       picture: Exercise2,
       title: "Walk Santos",
       description: "Before you go to school, take care of your friend's business",
       experience: "400"
      },
     
       ]
    return(
        <div>
            <h2>Feeding Page</h2>
            <button onClick={() => handleSubmit()}>Submit Request</button>
        </div>
    )
}