// create your App component here
import React from "react";
import { useState , useEffect } from "react";

function App(){
    // Initializing state variables using the useState hook
    // using the useState hook to create 2 pieces of state
    //i.e. image and isLoaded (to keep track of whether our image has been loaded)
    const [image,setImage] = useState([])
    const [isLoaded,setIsLoaded] = useState(false)


    //defining a function called imageRequest so that inside this function we can call an api to get us that photo.
    const imageRequest = ()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(image => {console.log(image.message)

            // // Updating the state variables with the fetched image URL and set isLoaded to true
            setImage(image.message);
            setIsLoaded(true);
        })
    }
    useEffect(
        ()=>imageRequest(),
        []

        //using an empty dependecies array so that the effect runs once when component is mounted.
    )

  return (
    <div>
        {isLoaded ? <img src={image} alt="A Random Dog"/> : <p> Loading... </p>}
    </div>
  )  
}

export default App
