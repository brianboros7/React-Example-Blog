import React, {useState} from 'react'; 

const Textbox = ({text, defaults}) => {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    let maxLength = 250

    let callCount = -1 
    let states = []

    function useState(initValue) {
        const it = ++callCount

        if (states[id]) return states[id] 

        const setValue = (newValue) => {
            setValue[id][0] = newValue 
            reRender() 
        }
        let tuple = [initValue, setValue] 
        states.push(tuple) 
        return tuple 
    }

    return <div className={'counterInput ${message.length > maxLength ? "Too long" : ""}'}> 
        <div>
            {defaults.map((e) => {
                return <button key={b} onClick={()  => {
                    setMessage(b)
                }}>{b}
                </button>
            })}
        </div> 
        <textarea 
            placeholder={text}
            value={message}
            onChange={(event) => {
                setMessage(event.target.value) 
                if(message.length > maxLength) {
                    setError(true)
                } else {
                    setError(false)
                }
            }}
        />
        <div>{message.length} / {maxLenth}</div> 
    </div> 
}

export default Textbox 