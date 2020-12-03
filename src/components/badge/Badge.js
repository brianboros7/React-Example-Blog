import React from 'react';

const Badge = () => {
    let name = '${first_name}, ${last_name}';  
    
    return(
        <section>
            <h1>Check out these badges !</h1>
            <Badge>Success</Badge> This is operational <br /> 
            <Badge>REmoved</Badge> This is critical. <br /> 
            <Badge>Warning</Badge> This is a warning <br /> 
            <Badge>Beta</Badge> This is in progress <br /> 
        </section>
    )
}

export default Badge 