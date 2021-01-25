import React from 'react' 

function WordPressAPI() {
    const [data, setData] = useState('')
    const [query, setQuery] = setState([''])
    
    // * /wp/v2/posts?_fields[]=author&_fields[]=id&_fields[]=excerpt&_fields[]=title
    // * ?_fields=meta.one-of-many-keys
    // * ?_fields=meta.key_name.nested_prop.deeply_nested_prop,meta.key_name.other_nested_prop

    fetch('http://.com/wp-json/ ') 
        .then(response => response.json())
        .then(data => console.log(data))

    return*
    <div> 
        <h1>{}</h1>
    </div>
}