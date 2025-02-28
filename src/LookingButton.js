import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect } from "react";
import { useState } from "react";

function LookingButton() {
  const PORT = 8080;
  const [starter, setStarter] = useState("");
  const [triggerEffect, setTriggerEffect] = useState(false);

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  
  useEffect(() => {
    if (triggerEffect) {
      fetch(`http://localhost:${PORT}/getStarter`, {
        method: "GET"
      })
        .then((response) => response.json())
        .then((data) => {
          setStarter(data[getRandomInt(0, data.length)].SENTENCE);
          console.log(data);
        })
        .catch((error) => {console.log(error);});
      console.log('useEffect triggered!');
      setTriggerEffect(false); // Reset the trigger
    }
  }, [triggerEffect, starter]);

  const handleClick = () => {
    setTriggerEffect(true);
  };

    return (
        <div style={{background: '#b8dbf4', paddingTop: '50px'}}>  
        {/* the above div contains the content we will fetch from the api when the button is clicked */}
      <TextField label={starter} disabled id="outlined-disabled" style = {{background: '#FFFFFF', marginRight: '100px'}} sx={{ width: 310, height: 75 }}> 
        </TextField>
      <Button variant="contained" size="large" sx={{ width: 310, height: 75 }} onClick={ handleClick }>
          Looking for a convo starter?
        </Button>
      </div>
    )
}

export default LookingButton; 