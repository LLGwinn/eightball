import React, {useState} from 'react';
import './Eightball.css'

const answer = (array) => {
    const randomIdx = Math.floor(Math.random() * array.length);
    return array[randomIdx];
}

const Eightball = ({answers}) => {
    const [color, setColor] = useState('black');
    const [msg, setMsg] = useState('Think of a Question.');

    const handleClick = () => {
        const {color, msg} = answer(answers);
        setColor(color);
        setMsg(msg);
    }

    return (
        <div className='Eightball' 
             style={{backgroundColor: color}}
             onClick={handleClick}>
            <p className='Eightball-msg'>{msg}</p>
        </div>
    )
}

export default Eightball;