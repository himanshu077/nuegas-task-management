"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import { useMediaQuery, Box, Typography, IconButton } from '@mui/material';
import Sidebar from "@/components/Sidebar";
import HeaderSidebar from "@/common/HeaderSidebar/HeaderSidebar";
import Notification from "@/assets/svg/Notification.svg";
import Image from "next/image"
import Profile from "@/assets/svg/Profile.svg";
import SettingTabs from "@/common/Tabs/Tabs";
import CommonSelect from "@/common/CommonSelect";
import PrimaryButton from "@/common/PrimaryButton/PrimaryButton";
import Circle24 from "@/assets/svg/Circle24.svg"
import Circle12 from "@/assets/svg/Circle12.svg"

const Settings = () => {

    const isLargeScreen = useMediaQuery('(min-width:1084px)');

    return (
        <main className="min-h-screen">
            <Grid container spacing={0}>
                <Grid item xs={isLargeScreen ? 2 : false}>
                    {isLargeScreen ? <Sidebar /> : <HeaderSidebar />}
                </Grid>
                <Grid item xs={isLargeScreen ? 10 : 12}>
                    <Box className="!bg-white !border-b !border-[--Activity-body]">
                        <Box className="!flex !items-center !justify-between !p-6">
                            <Typography className='PlusJakartaSans600 !text-[--Secondary-500] !text-2xl !px-2'>Settings</Typography>
                            <Box className="lg:!flex !items-center !gap-6 !hidden ">
                                <IconButton>
                                    <Image src={Notification} alt="Notification" />
                                </IconButton>
                                <Image src={Profile} alt="Profile" />
                            </Box>
                        </Box>
                    </Box>
                    <Box className="lg:!m-8 !m-3 !bg-white !px-8 !py-4 !rounded-xl">
                        <SettingTabs />
                        <Typography className='PlusJakartaSans600 !text-[--Secondary-500] !text-sm !px-2 !py-5'>Language</Typography>
                        <CommonSelect />
                        <Typography className='PlusJakartaSans600 !text-[--Secondary-500] !text-sm !px-2 !py-5'>Timezone</Typography>
                        <CommonSelect />
                        <Typography className='PlusJakartaSans600 !text-[--Secondary-500] !text-sm !px-2 !py-5'>Timezone</Typography>
                        <Box className="!pb-4 !flex !gap-2">
                            <button className="!border !border-[--Primary-500] !py-3 !rounded-lg PlusJakartaSans500 !flex !text-[--Secondary-500] text-xs !px-4">24 Hours<Image src={Circle24} alt="24" className="!ml-[4.1vw]" /></button>
                            <button className="!border !border-[--Activity-body] !rounded-lg !py-3 PlusJakartaSans500 !flex !text-[--Secondary-500] text-xs !px-4 ">12 Hours<Image src={Circle12} alt="12" className="!ml-[4.1vw]" /></button>
                        </Box>
                        <PrimaryButton title="Save Changes" />
                    </Box>
                </Grid>
            </Grid>
        </main>

    )
}

export default Settings


