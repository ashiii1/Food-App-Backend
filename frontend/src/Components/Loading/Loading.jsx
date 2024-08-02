import React, { useEffect, useState } from 'react'
import { FaPizzaSlice } from 'react-icons/fa';
import "./Loading.css"

const Loading = () => {
    const numberOfSlices = 4;
    const loadingMessages=["Sit tight while we load your data...",
    "Loading your content...","Fetching data...","Please wait..."
        
  ]
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
    }, 2000); // Change the interval duration as needed

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div styled={{height:"400px"}}>
<div style={{display:'flex', justifyContent:"center", alignItems:"end", marginTop:"80px", fontSize:"25px"}} >{loadingMessages[messageIndex]}</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px', marginTop:'-120px' }}>
      <div style={{ display: 'flex', animation: 'rotate 2s linear infinite' }}>
        {Array.from({ length: numberOfSlices }).map((_, index) => (
          <FaPizzaSlice key={index} style={{ fontSize: '36px', margin: '5px' }} />
        ))}
      </div>
    </div>
        </div>
  )
}

export default Loading