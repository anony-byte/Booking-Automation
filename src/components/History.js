import React, { useState } from 'react'
import { useEffect } from 'react';
const History = (props) => {
    const[history,setHistory] = useState(props.data);
    // console.log(props.data);
    // console.log("Coming here");
    useEffect(() => {
        setHistory(props.data);
    }, [props.data]);
    return (
        <div className='history-container'>
          {history.map((item, index) => (
            <p key={index}>
              Panel Name: {item.panel_name}, Sheet No: {item.sheet_no}, Timestamp: {item.timestamp}
            </p>
          ))}
        </div>
    );
}

export default History; 