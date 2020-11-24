import React from 'react'; 

function DateTime() { 
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        <div className="date-time-wrapper"> 
            <h3>{timeOfDay}</h3>
        </div>
    )
}

export default DateTime; 