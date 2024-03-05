import React from 'react'
import { Box } from "@mui/material"
import Title from '@/common/Title/Title'
import ReviewCards from '@/common/ReviewCards/ReviewCards'
import Photo from "@/assets/svg/Photo.svg"
import Photo2 from "@/assets/svg/Photo2.svg"

const MonthlyMentors = () => {
    return (
        <Box className="!py-10">
            <Box className="!mb-6">
                <Title title="Monthly Mentors" />
            </Box>
            <Box className="!flex flex-col lg:flex-row lg:!gap-4">
                <ReviewCards src={Photo} alt="photo" name="Curious George" tag='UI UX Design' title="+ Follow" count="40" reviews="4,7 (750 Reviews)" />
                <ReviewCards src={Photo2} alt="photo" name="Abraham Lincoln" tag='3D Design' title="Followed" count="32" reviews="4,9 (510 Reviews)" className="!hidden lg:!inline" />
                <ReviewCards src={Photo2} alt="photo" name="Abraham Lincoln" tag='3D Design' title="Followed" count="32" reviews="4,9 (510 Reviews)" className="!hidden lg:!inline" />
            </Box>
        </Box>
    )
}

export default MonthlyMentors
