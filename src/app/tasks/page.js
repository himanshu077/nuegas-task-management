"use client"
import React from "react";
import Grid from "@mui/material/Grid";
import { useMediaQuery, Box } from '@mui/material';
import Sidebar from "@/components/Sidebar";
import HeaderSidebar from "@/common/HeaderSidebar/HeaderSidebar";
import Header from "@/components/Header";
import Title from "@/common/Title/Title";
import TaskImage from "@/assets/svg/Task.png"
import Image from "@/assets/svg/Image.svg"
import Image2 from "@/assets/svg/Image2.svg"
import TaskCards from "@/common/TaskCards/TaskCards";

const Tasks = () => {

  const isLargeScreen = useMediaQuery('(min-width:1084px)');

  return (
    <main className="min-h-screen">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={2}>
          {isLargeScreen ? <Sidebar /> : <HeaderSidebar />}
        </Grid>
        <Grid item xs={12} lg={10}>
          <Header title="Task" />
          <Box className="!my-6 !mx-3">
            <Title title="Time Limit" />
          </Box>
          <Box className="!flex lg:!flex-row !gap-8 !flex-col !mx-3">
            <TaskCards src={TaskImage} alt="task" title="Creating Awesome Mobile Apps" subTitle="UI UX Design" progressPercentage="90%" leftDays="1 Hour" />
            <TaskCards src={Image} alt="image" title="Creating Mobile App Design" subTitle="UI UX Design" progressPercentage="75%" leftDays="3 Days Left" />
            <TaskCards src={Image2} alt="image2" title="Creating Perfect Website" subTitle="Web Developer" progressPercentage="85%" leftDays="4 Days Left" />
            <TaskCards src={Image2} alt="image2" title="Creating Perfect Website" subTitle="Web Developer" progressPercentage="85%" leftDays="4 Days Left" />
          </Box>
          <Box className="!my-6 !mx-3">
            <Title title="New Task" />
          </Box>
          <Box className="!flex lg:!flex-row !gap-8 !flex-col !mx-3">
            <TaskCards src={TaskImage} alt="task" title="Creating Awesome Mobile Apps" subTitle="UI UX Design" progressPercentage="90%" leftDays="1 Hour" />
            <TaskCards src={Image} alt="image" title="Creating Mobile App Design" subTitle="UI UX Design" progressPercentage="75%" leftDays="3 Days Left" />
            <TaskCards src={Image2} alt="image2" title="Creating Perfect Website" subTitle="Web Developer" progressPercentage="85%" leftDays="4 Days Left" />
            <TaskCards src={Image2} alt="image2" title="Creating Perfect Website" subTitle="Web Developer" progressPercentage="85%" leftDays="4 Days Left" />
          </Box>
        </Grid>
      </Grid>
    </main>
  )
}

export default Tasks;
