import React, {useState} from 'react' 

function StarWars() {
    const [data, setData] = useState([''])

    fetch("https://swapi.dev/api/people/1")
        .then(response => response.json())
        .then(data => setData(data))
    
        return(
        <div> 
            <h2>{data.name}</h2> 
        </div>
    )
}

export default StarWars 