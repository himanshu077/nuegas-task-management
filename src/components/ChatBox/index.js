import React from 'react';
import { chatBoxData } from './data';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const ChatBox = () => {
    return (
        <div className="lg:w-[400px] w-full h-screen bg-white !px-4">
            {chatBoxData.map((data) => (
                <Box key={data.id} className="flex !py-2">
                    <Image src={data.src} alt="image" />
                    <Box className="px-3 !flex">
                        <Box className="flex !flex-col">
                            <Typography className="font-semibold text-sm text-secondary-500">
                                {data.name}
                            </Typography>
                            <Typography className="font-normal text-sm text-secondary-500">
                                {data.lastMessage}
                            </Typography>

                        </Box>
                        <Box className="flex !flex-col">
                            <Typography className="font-light text-xs text-secondary-300">
                                {data.time}
                            </Typography>
                            <Image src={data.isComplete} alt="completed" />
                        </Box>
                    </Box>
                </Box>
            ))}
        </div>
    );
};

export default ChatBox;
