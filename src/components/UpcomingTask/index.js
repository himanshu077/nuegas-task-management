import React from 'react'
import { Box } from "@mui/material"
import Title from '@/common/Title/Title'
import TaskCards from '@/common/TaskCards/TaskCards'
import Image from "@/assets/svg/Image.svg"
import Image2 from "@/assets/svg/Image2.svg"

const UpcomingTask = () => {
    return (
        <Box>
            <Box className="!mb-6">
                <Title title="Upcoming Task" />
            </Box>
            <Box className="!flex !flex-row !gap-2">
                <TaskCards src={Image} alt="image" title="Creating Mobile App Design" subTitle="UI UX Design" progressPercentage="75%" leftDays="3 Days Left" />
                <TaskCards src={Image2} alt="image2" title="Creating Perfect Website" subTitle="Web Developer" progressPercentage="85%" leftDays="4 Days Left" className="!hidden lg:!inline" />
                <TaskCards src={Image2} alt="image2" title="Creating Perfect Website" subTitle="Web Developer" progressPercentage="85%" leftDays="4 Days Left" className="!hidden lg:!inline" />
            </Box>
        </Box>
    )
}

export default UpcomingTask
