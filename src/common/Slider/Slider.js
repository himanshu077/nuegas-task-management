import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function Sliders({defaultValue}) {
  return (
    <Box >
      <Slider
          defaultValue={defaultValue}
        aria-label="Small"
        valueLabelDisplay="auto"
        sx={{
          color: '#546FFF',
          height: 8,
        }}
      />
    </Box>
  );
}
