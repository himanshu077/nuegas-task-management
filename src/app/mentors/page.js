"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import { useMediaQuery, Box, Typography } from '@mui/material';
import Sidebar from "@/components/Sidebar";
import HeaderSidebar from "@/common/HeaderSidebar/HeaderSidebar";
import Header from "@/components/Header";
import Title from "@/common/Title/Title";
import ReviewCards from "@/common/ReviewCards/ReviewCards";
import Photo from "@/assets/svg/Photo.svg";
import Photo2 from "@/assets/svg/Photo2.svg"

const Mentors = () => {

    const isLargeScreen = useMediaQuery('(min-width:1084px)');

    return (
        <main className="min-h-screen">
            <Grid container spacing={2}>
                <Grid item xs={isLargeScreen ? 2 : false}>
                    {isLargeScreen ? <Sidebar /> : <HeaderSidebar />}
                </Grid>
                <Grid item xs={isLargeScreen ? 10 : 12}>
                    <Header title="Mentors" />
                    <Box className="!px-3">
                        <Box className="!my-6 !mx-3">
                            <Title title="Recent Mentors" />
                        </Box>
                        <Box className="!flex flex-col lg:flex-row lg:!gap-4">
                            <ReviewCards src={Photo} alt="photo" name="Curious George" post='UI UX Design' title="+ Follow" count="40" reviews="4,7 (750 Reviews)" />
                            <ReviewCards src={Photo2} alt="photo" name="Abraham Lincoln" post='3D Design' title="Followed" count="32" reviews="4,9 (510 Reviews)" className="!hidden lg:!inline" />
                            <ReviewCards src={Photo} alt="photo" name="Curious George" post='UI UX Design' title="+ Follow" count="40" reviews="4,7 (750 Reviews)" />
                            <ReviewCards src={Photo2} alt="photo" name="Abraham Lincoln" post='3D Design' title="Followed" count="32" reviews="4,9 (510 Reviews)" className="!hidden lg:!inline" />
                        </Box>
                        <Box className="!my-6 !mx-3">
                            <Typography className='PlusJakartaSans600 !text-[--Secondary-500] lg:!text-2xl !text-xl'>Mentors</Typography>
                        </Box>
                        <Box className="!grid lg:!grid-cols-4 !grid-rows-1 lg:!gap-4 !pb-6">
                            <ReviewCards
                                src={Photo}
                                alt="photo"
                                name="Curious George"
                                post='UI UX Design'
                                title="+ Follow"
                                count="40"
                                reviews="4,7 (750 Reviews)"
                                description="Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . " />
                            <ReviewCards
                                src={Photo2}
                                alt="photo"
                                name="Abraham Lincoln"
                                post='3D Design' title="Followed"
                                count="32" reviews="4,9 (510 Reviews)"
                                description="Hi, I'm Alex Stanton. I am a doctoral student at Oxford University majoring in UI / UX  . . . " />
                            <ReviewCards
                                src={Photo}
                                alt="photo"
                                name="Curious George"
                                post='UI UX Design'
                                title="+ Follow"
                                count="40"
                                reviews="4,7 (750 Reviews)"
                                description="Hi, I'm Antoine Griezmann. I'm an Android Developer at Google company . . ."
                            />
                            <ReviewCards src={Photo2} alt="photo" name="Abraham Lincoln" post='3D Design' title="Followed" count="32" reviews="4,9 (510 Reviews)" description="Hi, I'm Anna White. I'm a professional 3D Designer at Blender company . . ." />
                            <ReviewCards src={Photo} alt="photo" name="Curious George" post='UI UX Design' title="+ Follow" count="40" reviews="4,7 (750 Reviews)" description="Hi, I'm Richard Kyle. I'm a professional 2D Designer at Photoshop company . . ." />
                            <ReviewCards src={Photo2} alt="photo" name="Abraham Lincoln" post='3D Design' title="Followed" count="32" reviews="4,9 (510 Reviews)" description="Hi, I'm Richard Kyle. I'm a professional 2D Designer at Photoshop company . . ." />
                            <ReviewCards src={Photo} alt="photo" name="Curious George" post='UI UX Design' title="+ Follow" count="40" reviews="4,7 (750 Reviews)" description="Hi, I'm Richard Kyle. I'm a professional 2D Designer at Photoshop company . . ." />
                            <ReviewCards src={Photo2} alt="photo" name="Abraham Lincoln" post='3D Design' title="Followed" count="32" reviews="4,9 (510 Reviews)" description="Hi, I'm Richard Kyle. I'm a professional 2D Designer at Photoshop company . . ." />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </main>

    )
}

export default Mentors

