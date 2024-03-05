import React from 'react'
import Image from "next/image"
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material"
import NuegasLogo from "@/assets/svg/NuegasLogo.svg";
import OverView from "@/assets/svg/OverView.svg";
import Mentors from "@/assets/svg/Mentors.svg";
import Tasks from "@/assets/svg/Tasks.svg";
import Settings from "@/assets/svg/Settings.svg";
import Message from "@/assets/svg/Message.svg";
import HelpCenter from '../HelpCenter';

const Sidebar = () => {
    return (
        <Box className="h-screen !bg-white w-[16vw] p-8 fixed top-0 left-0 overflow-auto">
            <Box>
                <Image src={NuegasLogo} alt="NuegasLogo" />
            </Box>

            <Box role="presentation " className="relative">
                <List className="mt-14 p-0">
                    <a href="/">
                        <ListItem className="p-0">
                            <ListItemButton className="PlusJakartaSans700 hover:bg-[--body] hover:rounded-lg py-[10px] hover:text-black">
                                <ListItemIcon>
                                    <Image src={OverView} alt="OverView" />
                                </ListItemIcon>
                                <ListItemText
                                    className="font-bold text-[--sidebar-text] hover:text-black"
                                    primary="Overview"
                                />
                            </ListItemButton>
                        </ListItem>
                    </a>
                    <a href="/tasks">
                        <ListItem className="px-0 py-2">
                            <ListItemButton className="PlusJakartaSans700 hover:bg-[--body] hover:rounded-lg hover:text-black">
                                <ListItemIcon>
                                    <Image src={Tasks} alt="Tasks" />
                                </ListItemIcon>
                                <ListItemText
                                    className="font-bold text-[--sidebar-text] hover:text-black"
                                    primary="Tasks"
                                />
                            </ListItemButton>
                        </ListItem>
                    </a>
                    <a href="/mentors">
                        <ListItem className="px-0 py-2">
                            <ListItemButton className="PlusJakartaSans700 hover:bg-[--body] hover:rounded-lg hover:text-black">
                                <ListItemIcon>
                                    <Image src={Mentors} alt="Mentors" />
                                </ListItemIcon>
                                <ListItemText
                                    className="font-bold text-[--sidebar-text] hover:text-black"
                                    primary="Mentors"
                                />
                            </ListItemButton>
                        </ListItem>
                    </a>
                    <a href="/message">
                        <ListItem className="px-0 py-2">
                            <ListItemButton className="PlusJakartaSans700 hover:bg-[--body] hover:rounded-lg hover:text-black">
                                <ListItemIcon>
                                    <Image src={Message} alt="Message" />
                                </ListItemIcon>
                                <ListItemText
                                    className="font-bold text-[--sidebar-text] hover:text-black"
                                    primary="Message"
                                />
                            </ListItemButton>
                        </ListItem>
                    </a>
                    <a href="/settings">
                        <ListItem className="px-0 py-2">
                            <ListItemButton className="PlusJakartaSans700 hover:bg-[--body] hover:rounded-lg hover:text-black">
                                <ListItemIcon>
                                    <Image src={Settings} alt="Settings" />
                                </ListItemIcon>
                                <ListItemText
                                    className="font-bold text-[--sidebar-text] hover:text-black"
                                    primary="Settings"
                                />
                            </ListItemButton>
                        </ListItem>
                    </a>
                </List>
            </Box>
            <Box className="absolute bottom-4">
                <HelpCenter />
            </Box>
        </Box>
    )
}

export default Sidebar
