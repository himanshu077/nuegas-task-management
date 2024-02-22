"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const page = () => {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Overview", "Task", "Mentors", "Message", "Settings"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box>
        <Typography className="PlusJakartaSans700">Main App</Typography>
      </Box>
      <div>
        <Button onClick={toggleDrawer(true)}>Main App</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </main>
  );
};

export default page;
