import React, { useEffect, useState, useReducer } from 'react'


// 00:00 pause  stop
//  hours: minutes    puasebutton stop button 

const globalStore = {
    time: 0,
    isActive: false,
}

//reduce rwill have its state which talks to global store updates
const initialStateForReducer = {
    time: 0,
}
const reducer  =  (state, {type, payload}) => {
    if(type === 'startAction'){
        // update the interval time in global store
        return {
            ...state,
            time: state.time + payload.intervalnumber,
        }
    }

    if(type === 'stopAction'){
        // update the interval time in global store
        return {
            ...state,isActive: false,
        }
    }
}

const INTERVAL = 1;
function StopWatch(){
    
    const [ time, setTime ]= useState(0); // update counter every tick
    const [ isActive, setIsActive ] = useState(false);
    const [ isPaused, setIsPaused ] = useState(true);

    let timeInterval = null;

    // useEffect(() => {
    //     let timeInterval = null;
    //     if(!isActive){
    //         timeInterval  = setInterval(() => {
    //                 setTime((time) => time + INTERVAL);
    //         }, INTERVAL); // kind of 50 second of time interval
    //     } else {s
    //         clearInterval(timeInterval);
    //     }
    // },[isActive, isPaused])

    const [state, dispatch] = useReducer(reducer, initialStateForReducer);

  

    const startInterval = () => {
        if(!(isActive && isPaused)){
            timeInterval  = setInterval(() => {
                    setTime((time) => time + INTERVAL);
            }, INTERVAL); // kind of 50 second of time interval
        } else {
            clearInterval(timeInterval);
        }
    }

    const stopInterval = () => {
        clearInterval(timeInterval);
        setIsActive(false);
    }


    const handlePause = () => {
        // pause logic goes here 
        setIsPaused(!isPaused);

    }

    const handleStop = () =>{
        // stop logic goes here
        setIsActive(false);
        setTime(0);
    }

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    }

    return (
        <div>
            <div class="digits">
                {state.time}
                </div>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleStop}>Stop/Reset</button>
                <button onClick={() => dispatch({type:'start'})}>Start</button>
               
        </div>
    )

}

export default StopWatch;