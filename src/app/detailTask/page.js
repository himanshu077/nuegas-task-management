"use client"
import React from "react";
import Grid from "@mui/material/Grid";
import { useMediaQuery, Box, Typography } from '@mui/material';
import Sidebar from "@/components/Sidebar";
import HeaderSidebar from "@/common/HeaderSidebar/HeaderSidebar";
import Header from "@/components/Header";
import Title from "@/common/Title/Title";
import VideoTask from "@/assets/svg/VideoTask.png"
import TimeCircle from "@/assets/svg/Time-Circle.svg"
import Profileuser from "@/assets/svg/profile-2user.svg"
import ListItemIcon from '@mui/material/ListItemIcon';
import Image from "next/image"
import TickCircle from "@/assets/svg/tick-circle.svg"
import FolderOpen from "@/assets/svg/folder-open.svg"
import PrimaryButton from "@/common/PrimaryButton/PrimaryButton";

const DetailTasks = () => {


    const isLargeScreen = useMediaQuery('(min-width:1084px)');

    return (
        <main className="min-h-screen">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={2}>
                    {isLargeScreen ? <Sidebar /> : <HeaderSidebar />}
                </Grid>
                <Grid item xs={12} lg={10}>
                    <Header title="Detail Task" />
                    <Grid container spacing={0}>
                        <Grid item xxs={12} lg={7}>
                            <Box className="!m-4 !bg-white lg:!pl-12 !pl-4">
                                <Box className="!flex !justify-center !pt-3">
                                    <Image src={VideoTask} alt="image" />
                                </Box>
                                <Typography variant="h1" className="PlusJakartaSans600 !text-[32px] !text-[--Secondary-500] !my-4">Creating Awesome Mobile Apps</Typography>
                                <Box className="!flex !gap-2">
                                    <Typography className="PlusJakartaSans500 !text-sm !text-[--Secondary-400]">UI UX Design . Apps Design</Typography>
                                    <Typography className="!cursor-pointer !text-[--link-color] PlusJakartaSans400 !text-sm">+ Get Mentors</Typography>
                                </Box>
                                <Box className="!flex lg:!gap-6 !my-2">
                                    <Box className="!flex !gap-1">
                                        <Image src={Profileuser} alt="profile" />
                                        <Typography className="PlusJakartaSans500 !text-sm !text-[--Secondary-500]">200 Students Involved</Typography>
                                    </Box>
                                    <Box className="!flex !gap-1 ">
                                        <Image src={TimeCircle} alt="clock" />
                                        <Typography className="PlusJakartaSans500 !text-sm !text-[--Secondary-500]">1 Hour</Typography>
                                    </Box>
                                </Box>
                                <Typography variant="h3" className="PlusJakartaSans600 !text-2xl !text-[--Secondary-500]">Description</Typography>
                                <Typography className="!break-words PlusJakartaSans500 !text-sm !text-[--Secondary-500] !py-4">Follow the video tutorial above. Understand how to use each tool in the Figma application. Also learn how to make a good and correct design. Starting from spacing, typography, content, and many other design hierarchies. Then try to make it yourself with your imagination and inspiration.</Typography>
                                <Typography  className="PlusJakartaSans600 !text-2xl !text-[--Secondary-500]">Essence of Assessment</Typography>
                                <Box className="!flex !gap-2 !py-3">
                                    <Image src={TickCircle} alt="tick" />
                                    <Typography className="PlusJakartaSans500 !text-base !text-[--Secondary-500]">Understanding the tools in Figma</Typography>
                                </Box>
                                <Box className="!flex !gap-2">
                                    <Image src={TickCircle} alt="tick" />
                                    <Typography className="PlusJakartaSans500 !text-base !text-[--Secondary-500]">Understand the basics of making designs</Typography>
                                </Box>
                                <Box className="!flex !gap-2 !py-3">
                                    <Image src={TickCircle} alt="tick" />
                                    <Typography className="PlusJakartaSans500 !text-base !text-[--Secondary-500]">Designing a mobile application using figma</Typography>
                                </Box>
                                <Box className="!flex !gap-2">
                                    <Image src={TickCircle} alt="tick" />
                                    <Typography className="PlusJakartaSans500 !text-base !text-[--Secondary-500]">Presenting the design flow</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={5}>
                            <Box className="!bg-white !px-6 !my-4">
                                <Typography className="PlusJakartaSans600 !text-base !text-[--Secondary-500]">Assigned Assignments</Typography>
                                <Typography variant="h4" className="PlusJakartaSans600 !text-2xl !text-[--Secondary-500]">Creating Awesome Mobile Apps</Typography>
                                <Typography>UI UX Design . Apps Design</Typography>
                                <Typography>Detail Student</Typography>
                                <Box className="!flex !justify-between">
                                    <Typography>Student's name</Typography>
                                    <Typography>Skylar Dias</Typography>
                                </Box>
                                <Box className="!flex !justify-between">
                                    <Typography>Student Class</Typography>
                                    <Typography>MIPA 2</Typography>
                                </Box>
                                <Box className="!flex !justify-between">
                                    <Typography>Student Number</Typography>
                                    <Typography>10</Typography>
                                </Box>
                                <Typography>File Task</Typography>
                                <Box>
                                    <Typography>Last Modified</Typography>
                                    <Typography>1 July 2022</Typography>
                                </Box>
                                <Typography>File submissions</Typography>
                                <Box className="!border-2 !border-dashed !border-[--Primary-500] !rounded-xl !mx-6 !w-[30vw] !flex !justify-center !h-[20vh]">
                                    <Image src={FolderOpen} alt="image" />
                                </Box>
                                <Typography className="PlusJakartaSans500 !text-sm !text-[--Secondary-500] !px-8">*drag or browser from device</Typography>
                                <PrimaryButton title="Submit" />
                            </Box>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </main>
    )
}

export default DetailTasks;
