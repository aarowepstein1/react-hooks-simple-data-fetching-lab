import React, { useEffect, useState } from "react";

function App() {
    const [image, setImage] = useState(null)
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(img =>img.json())
        .then(obj => setImage(obj.message))
    }, [])

    if (!image){
        return <p>"Loading...</p>
    }

    return(
        <img src={image} alt="A Random Dog" />
    )
}

export default App
