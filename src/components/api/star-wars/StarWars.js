import React, {useState, useEffect} from 'react' 

function StarWars() {
    const [data, setData] = useState([''])
    const loadData = () => { 
        fetch("https://swapi.dev/api/people/1")
        .then(response => response.json())
        .then(data => setData(data))
    }

    useEffect(() => {
        loadData()
    })
    
    
    return(
        <span>{data.name}</span> 
    )
}

export default StarWars 