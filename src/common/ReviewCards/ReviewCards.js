import React from 'react'
import { Box, Typography } from "@mui/material"
import Image from "next/image";
import Note from "../../assets/svg/Note.svg"
import Star from "../../assets/svg/Star.svg"

const ReviewCards = ({ src, alt, name, tag, title, count, reviews, description, className }) => {
    const titleColor = title === "Followed" ? "!text-[--Secondary-400]" : "!text-[--Primary-500]"

    return (
        <Box className={`!bg-white !rounded-xl lg:!m-4 md:!m-3 !m-2 !px-3 !py-10 ${className}`}>
            <Box className="!flex">
                <Box className="!flex">
                    <Image src={src} alt={alt} />
                    <Box>
                        <Typography className='PlusJakartaSans600 lg:!pl-4 !pl-2 !text-base !text-[--Secondary-500]'>{name}</Typography>
                        <Typography className='PlusJakartaSans500 lg:!pl-4 !pl-2 !text-xs !text-[--Secondary-400]'>{tag}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography className={`PlusJakartaSans500 !text-sm lg:!pl-14 !pl-4 lg:!pr-2 ${titleColor}`}>{title}</Typography>
                </Box>
            </Box>
            <Box className="!mt-3">
                <Typography className='PlusJakartaSans500 leading-6 lg:!pl-4 !pl-2 !text-xs !break-words !text-[--Secondary-400]'>{description}</Typography>
            </Box>
            <Box className="!flex !justify-between !pt-6 ">
                <Box className="!flex !gap-1 lg:!px-2">
                    <Image src={Note} alt='note' />
                    <Typography className='PlusJakartaSans500 !pt-[2px] !text-sm !text-[--Secondary-500]'>{count}Task</Typography>
                </Box>
                <Box className="!flex !gap-1 lg:!px-2">
                    <Image src={Star} alt='star' />
                    <Typography className='PlusJakartaSans500 !pt-[2px] !text-sm !text-[--Secondary-500]'>{reviews}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ReviewCards
