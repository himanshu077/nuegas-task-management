import React from 'react';
import { Box, Typography } from "@mui/material";

const HelpCenter = () => {
    return (
        <Box className="relative">
            <Box className="w-48 h-60 bg-[--Secondary-500] rounded-lg flex flex-col justify-center items-center">
                <Typography className='PlusJakartaSans600 text-white text-base text-center'>Help Center</Typography>
                <Typography className='PlusJakartaSans500 text-white text-xs text-center'>Having Trouble in Learning. Please contact us for more questions.</Typography>
                <button className='bg-white rounded-lg mt-3 PlusJakartaSans500 text-xs px-5 py-2'>Go To Help Center</button>
            </Box>
            <Box className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6">
                <Typography className='text-white text-3xl w-12 h-12 bg-[--Secondary-500] flex justify-center items-center rounded-full border-4 border-white'>?</Typography>
            </Box>
        </Box>
    )
}

export default HelpCenter;
