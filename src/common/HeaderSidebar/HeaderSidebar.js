import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import OverView from "@/assets/svg/OverView.svg"
import Mentors from "@/assets/svg/Mentors.svg"
import Tasks from "@/assets/svg/Tasks.svg"
import Message from "@/assets/svg/Message.svg"
import Settings from "@/assets/svg/Settings.svg"
import Profile from "@/assets/svg/Profile.svg";
import Notification from "@/assets/svg/Notification.svg";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box"
import Image from "next/image"

const HeaderSidebar = () => {

  const data = [
    { id: 1, title: "OverView", src: OverView, alt: "overview", path: "/" },
    { id: 2, title: "Task", src: Tasks, alt: "task", path: "/task" },
    { id: 3, title: "Mentors", src: Mentors, alt: "mentors", path: "/mentors" },
    { id: 4, title: "Message", src: Message, alt: "message", path: "/message" },
    { id: 5, title: "Settings", src: Settings, alt: "setting", path: "/settings" }
  ]


  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Box className="!flex !justify-between">
        <Button onClick={toggleDrawer(!open)}><MenuIcon className="!text-[--Secondary-500] !text-3xl" /></Button>
        <Box className=" !flex !items-center !gap-2  ">
          <IconButton>
            <Image src={Notification} alt="Notification" />
          </IconButton>
          <Image src={Profile} alt="Profile" />
        </Box>
      </Box>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {data.map((item) => (
              <ListItem key={item.id} className="!px-6">
                <a href={item.path}>
                  <ListItemButton className="!p-2">
                    <Image src={item.src} alt={item.alt} />
                    <ListItemText primary={item.title} sx={{ fontSize: 24, paddingLeft: 6 ,paddingRight:8}} />
                  </ListItemButton>
                </a>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default HeaderSidebar;