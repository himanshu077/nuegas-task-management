import React from 'react'
import { Box, Typography } from "@mui/material"
import Image from "next/image";
import Note from "../../assets/svg/Note.svg"
import Star from "../../assets/svg/Star.svg"

const ReviewCards = ({ src, alt, name, post, title, count, reviews, description }) => {
    return (
        <Box className="!bg-white rounded-full">
            <Box className="!flex">
                <Box className="!flex">
                    <Image src={src} alt={alt} />
                    <Box>
                        <Typography className='PlusJakartaSans600 !text-base !text-[--Secondary-500]'>{name}</Typography>
                        <Typography className='PlusJakartaSans500 !text-xs !text-[--Secondary-400]'>{post}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography className='PlusJakartaSans500 !text-sm !text-[--Secondary-500]'>{title}</Typography>
                </Box>
            </Box>
            <Box>
                <Typography>{description}</Typography>
            </Box>
            <Box className="!flex">
                <Box>
                    <Image src={Note} alt='note' />
                    <Typography className='PlusJakartaSans500 !text-sm !text-[--Secondary-500]'>{count}Task</Typography>
                </Box>
                <Box className="!flex">
                    <Image src={Star} alt='star' />
                    <Typography className='PlusJakartaSans500 !text-sm !text-[--Secondary-500]'>{reviews}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ReviewCards
