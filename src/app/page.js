"use client";
import React from "react";
import Box from "@mui/material/Box";
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import OverView from "@/assets/svg/OverView.svg";
import Mentors from "@/assets/svg/Mentors.svg";
import Tasks from "@/assets/svg/Tasks.svg";
import Settings from "@/assets/svg/Settings.svg";
import Message from "@/assets/svg/Message.svg";
import Profile from "@/assets/svg/Profile.svg";
import Notification from "@/assets/svg/Notification.svg";
import NuegasLogo from "@/assets/svg/NuegasLogo.svg";
import Image from "next/image";
import Calendar from "@/common/Calendar/Calendar";
import RunningTrackUi from "@/common/RunningUI/RunningTrackUi";
import Activity from "@/components/Activity";

const page = () => {
  return (
    <main className=" min-h-screen ">
      {/* <Box className="flex">
        <Box className="border-2 border-red-600  !min-h-[600px] !w-full !grid !grid-cols-2"></Box>
        <Box className="border-2 border-green-600 !min-h-[600px] !w-full !grid !grid-cols-7"></Box>
        <Box className="border-2 border-blue-600 !min-h-[600px] !w-full !grid !grid-cols-3"></Box>
      </Box> */}

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box className="!h-screen !bg-[--white] !min-w-[252px] !p-8">
            <Box>
              <Image src={NuegasLogo} alt="NuegasLogo" />
            </Box>

            <Box role="presentation ">
              <List className="!mt-14 !p-0">
                <a href="/">
                  <ListItem className="!p-0">
                    <ListItemButton className="PlusJakartaSans700 hover:!bg-[--body] hover:rounded-lg !py-[10px] hover:!text-black">
                      <ListItemIcon>
                        <Image src={OverView} alt="OverView" />
                      </ListItemIcon>
                      <ListItemText
                        className="!font-bold !text-[--sidebar-text] hover:!text-black"
                        primary="Overview"
                      />
                    </ListItemButton>
                  </ListItem>
                </a>
                <a href="/tasks">
                  <ListItem className="!px-0 !py-2">
                    <ListItemButton className="PlusJakartaSans700 hover:!bg-[--body] hover:rounded-lg hover:!text-black">
                      <ListItemIcon>
                        <Image src={Tasks} alt="Tasks" />
                      </ListItemIcon>
                      <ListItemText
                        className="!font-bold !text-[--sidebar-text] hover:!text-black"
                        primary="Tasks"
                      />
                    </ListItemButton>
                  </ListItem>
                </a>
                <a href="/mentors">
                  <ListItem className="!px-0 !py-2">
                    <ListItemButton className="PlusJakartaSans700 hover:!bg-[--body] hover:rounded-lg hover:!text-black">
                      <ListItemIcon>
                        <Image src={Mentors} alt="Mentors" />
                      </ListItemIcon>
                      <ListItemText
                        className="!font-bold !text-[--sidebar-text] hover:!text-black"
                        primary="Mentors"
                      />
                    </ListItemButton>
                  </ListItem>
                </a>
                <a href="/message">
                  <ListItem className="!px-0 !py-2">
                    <ListItemButton className="PlusJakartaSans700 hover:!bg-[--body] hover:rounded-lg hover:!text-black">
                      <ListItemIcon>
                        <Image src={Message} alt="Message" />
                      </ListItemIcon>
                      <ListItemText
                        className="!font-bold !text-[--sidebar-text] hover:!text-black"
                        primary="Message"
                      />
                    </ListItemButton>
                  </ListItem>
                </a>
                <a href="/settings">
                  <ListItem className="!px-0 !py-2">
                    <ListItemButton className="PlusJakartaSans700 hover:!bg-[--body] hover:rounded-lg hover:!text-black">
                      <ListItemIcon>
                        <Image src={Settings} alt="Settings" />
                      </ListItemIcon>
                      <ListItemText
                        className="!font-bold !text-[--sidebar-text] hover:!text-black"
                        primary="Settings"
                      />
                    </ListItemButton>
                  </ListItem>
                </a>
              </List>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box className="border-2 !p-8 !bg-[--body-light] border-green-600 ">
            <Box className="!flex !items-center !justify-between">
              <Box className="!grid !gap-3">
                <Typography
                  variant="h1"
                  className="PlusJakartaSans700 !text-2xl !leading-9"
                >
                  Hi, Skylar Dias
                </Typography>
                <Typography
                  variant="h6"
                  className="!text-[--secondry-text] PlusJakartaSans500 !text-base !leading-6"
                >
                  Let's finish your task today!
                </Typography>
              </Box>

              <Box className="!flex !items-center !gap-6">
                <IconButton>
                  <Image src={Notification} alt="Notification" />
                </IconButton>

                <Image src={Profile} alt="Profile" />
              </Box>
            </Box>
            <Box className="!flex !mt-12">
              <RunningTrackUi />
              <Activity />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box className="border-2 border-blue-600 !p-8 !bg-[--body]">
            <Calendar />
          </Box>
        </Grid>
      </Grid>

      {/* <Typography variant="h1" className="PlusJakartaSans700">
        Main App
      </Typography> */}
    </main>
  );
};

export default page;
