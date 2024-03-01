import React from 'react';
import { Box, Button } from "@mui/material";

const PrimaryButton = ({ title, className }) => {
    return (
        <Box className={`${className}`}>
            <Button
                sx={{
                    backgroundColor: '#546FFF',
                    color: 'white',
                    textTransform: 'capitalize',
                    fontFamily: 'PlusJakartaSans500',
                    fontSize: '0.875vh',
                    padding: '0.65vw 16.5vh',
                    fontWeight: '500'
                }}
                className='hover:!text-[--Secondary-500] !text-sm !font-medium'
            >
                {title}
            </Button>
        </Box>
    )
}

export default PrimaryButton;
