import React from 'react'
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import Slider from '../Slider/Slider'
import Time from "../../assets/svg/Time-Circle.svg"
import Avatars from '../Avatars/Avatars'

const TaskCards = ({ src, alt, title, subTitle, progressPercentage }) => {
    return (
        <Box className="!bg-white !rounded-lg !p-4">
            <Image src={src} alt={alt} />
            <Typography>{title}</Typography>
            <Typography>{subTitle}</Typography>
            <Box className="flex">
                <Typography>Progress</Typography>
                <Typography>{progressPercentage}</Typography>
            </Box>
            <Slider />
            <Box>
                <Box>
                    <Image src={Time} alt='time' />
                    <Typography>{leftDays}</Typography>
                </Box>
                <Box>
                    <Avatars/>
                </Box>
            </Box>
        </Box>
    )
}

export default TaskCards
