import React, {useState, useEffect, useRef} from 'react'; 
import './style.css'; 

function TypingGame() {
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(10)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0) 
    const textBoxRef = useRef(null)

    function handleChange(e) {
        const {value} = e.target 
        setText(value) 
    }

    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length 
    }

    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(10)
        setText("")
        textBoxRef.current.disabled = false 
        textBoxRef.current.focus()
    }

    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text)) 
    }

    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000) 
        } else if(timeRemaining === 0) { 
            endGame()
        }
    }, [timeRemaining, isTimeRunning])

    return (
        <div className="speed-typing-section"> 
            <h2>Good morning, how fast can you type today?</h2>

            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                
            />
            <h4 className="my-2">
                Time remaining: {timeRemaining}
            </h4> 
            <button 
                className="speed-typing-btn"
                onClick={startGame}>
                Start
            </button>
            <h1 className="my-3">Word count: {wordCount}</h1>
        </div>
    )
}

export default TypingGame 