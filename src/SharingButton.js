import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect } from "react";
import { useState } from "react";

function SharingButton(){
     const [starter, setStarter] = useState("");
     const [triggerEffect, setTriggerEffect] = useState(false);
     const PORT = 8080;

     useEffect(() => {
        const starterContent = document.getElementById("starter").value;
        console.log(starterContent)
        if (triggerEffect) {
            if (starterContent == null || starterContent == "" || starterContent == '' || starterContent == undefined || starterContent.indexOf(" ") == 0){
                console.log("empty!")
                setStarter("Cannot submit an empty starter!");
            }
            else{ 
                fetch(`http://localhost:${PORT}`, {
                    method: "POST", 
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({sentences: starterContent}),
                  }).then( setStarter(starterContent))
                  .then(alert("Thanks for Sharing!"))
                .catch((error) => {console.log(error);});
            }
          }
          setTriggerEffect(false); // Reset the trigger
        }, [triggerEffect, starter]);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') 
            setTriggerEffect(true); 
    });

    function handleClick(){
       setTriggerEffect(true); 
    }

    return(
        <div style={{background: '#b8dbf4', paddingTop: '50px', paddingBottom: '50px'}}>  
      <TextField label={starter} id="starter" style = {{background: '#FFFFFF', marginRight: '100px'}} sx={{ width: 310, height: 75 }}/>
      <Button variant="contained" size="large" sx={{ width: 310, height: 75 }} onClick = {handleClick}>
          Sharing a convo starter?
        </Button>
      </div>
    )

}

export default SharingButton