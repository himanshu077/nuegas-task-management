import React from 'react'
import { Box, Typography } from "@mui/material"
import Angelie from "@/assets/svg/Angelie.png"
import Online from "@/assets/svg/Notif.svg"
import Image from "next/image"
import VideoSvg from "@/assets/svg/video.svg"
import CallSvg from "@/assets/svg/call.svg"

const ChatArea = () => {
    return (
        <div>
            <Box className="flex p-4 bg-white justify-between">
                <Box className="flex">
                    <Image src={Angelie} alt='image' />
                    <Box className="px-4">
                        <Typography className='PlusJakartaSans600 !text-sm !text-[--Secondary-500]'>Angelie Crison</Typography>
                        <Box className="flex !gap-2 !py-1 items-center">
                            <Image src={Online} alt='online' />
                            <span className='PlusJakartaSans500 !text-xs !text-[--Secondary-500]'>Online</span>
                        </Box>
                    </Box>
                </Box>
                <Box className="flex gap-6 lg:mx-8 mx-2">
                    <Box className="w-5 h-5 rounded-full border border-[--Activity-body]">
                        <Image src={VideoSvg} alt='video' />
                    </Box>
                    <Box className="w-5 h-5 rounded-full border border-[--Activity-body]">
                        <Image src={CallSvg} alt='call' />
                    </Box>
                </Box>
            </Box>
            <Box className="flex justify-center !my-6">
                <Box className="bg-[--Secondary-500] w-[68px] rounded-lg h-[37px] flex items-center justify-center">
                    <Typography className='text-white text-center py-2'>Today</Typography>
                </Box>
            </Box>
            {/* <Box>
                <Typography className='!break-words PlusJakartaSans500 !text-sm !text-white !bg-[--Primary-500] '>Morning Angelie, I have question about My Task</Typography>
            </Box> */}
        </div>
    )
}

export default ChatArea
