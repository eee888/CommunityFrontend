import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Grid2 } from '@mui/material';


function Carousel() {

    const Item = styled(Box)(({ theme }) => ({
        backgroundColor: '#45b3e0',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
          backgroundColor: '#45b3e0',
        }),
      }));

    return(
    <Grid2 container spacing={3} sx={{bgcolor: "#45b3e0"}}>
        <Grid2 item xs={6} md={8}>
          <Item>Tens of Happy Members! </Item>
        </Grid2>

        <Grid2 item xs={6} md={8}>
          <Item>Word</Item>
        </Grid2>
    </Grid2>
      
    );
}
export default Carousel; 