import React, {useState} from 'react'; 
import './style.css'; 

function TypingGame() {
    const [text, setText] = useState("")

    function handleChange(e) {
        const {value} = e.target 
        setText(value) 
    }

    function calculateWordCount(text) {
        const wordArr = text.split(" ")
        console.log(wordArr.length)
        return wordArr.length 
    }

    return (
        <div className="speed-typing-section"> 
            <h2>Good morning, how fast can you type today?</h2>

            
            <textarea
                onChange={handleChange}
                value={text}
            />
            <h4 className="my-3">
                Time remaining: ??? 
            </h4> 
            <buttton 
                className="speed-typing-btn"
                onClick={() => calculateWordCount(text)}
            >
                Start
            </buttton>
            <h1 className="my-3">Word count: ???</h1>
        </div>
    )
}

export default TypingGame 