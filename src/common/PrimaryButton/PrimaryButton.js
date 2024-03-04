import React from 'react';
import { Box } from "@mui/material";

const PrimaryButton = ({ title, className }) => {
    return (
        <Box className={`${className}`}>
            <button className='!text-sm !font-medium !bg-[--Primary-500] !text-white xl:!px-[6.4vw] md:!px[4.5vw] !px-[2vh] !py-3 !rounded-lg'
            >
                {title}
            </button>
        </Box>
    )
}

export default PrimaryButton;
