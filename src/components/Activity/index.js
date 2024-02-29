import React from 'react'
import Image from "next/image";
import { Box, Typography } from "@mui/material"
import ArrowDown from "@/assets/svg/ArrowDown.svg"

const Activity = () => {
    return (
        <Box className="!text-[ --Activity-body] !rounded-xl !p-4">
            <Box className="!flex !justify-between">
                <Typography className='PlusJakartaSans600 !text-[--Secondary-500] !text-base'>Activity</Typography>
                <Box className="!flex !gap-2">
                    <Typography>This Week</Typography>
                    <Image src={ArrowDown} alt='arrow down'/>
                </Box>
            </Box>
            <Box className="">
                
            </Box>
        </Box>
    )
}

export default Activity
