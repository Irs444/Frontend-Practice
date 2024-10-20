import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const Sidebar = () => {
    return (
        <Box flex={1} sx={{ display: { xs: "none", md: "block" } }} p={2}>
            <Box position="fixed">

                <List>
                    <ListItem >
                        <ListItemButton component="a" href='#simple-list'>
                            <ListItemIcon>
                                < HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton component="a" href='#simple-list'>
                            <ListItemIcon>
                                < ArticleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton component="a" href='#simple-list'>
                            <ListItemIcon>
                                < GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton component="a" href='#simple-list'>
                            <ListItemIcon>
                                < StorefrontIcon />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton component="a" href='#simple-list'>
                            <ListItemIcon>
                                < PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton component="a" href='#simple-list'>
                            <ListItemIcon>
                                < SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Setting" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton component="a" href='#simple-list'>
                            <ListItemIcon>
                                < AccountBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton component="a" href='#simple-list'>
                            <ListItemIcon>
                                < ModeNightIcon />
                            </ListItemIcon>
                            <Switch />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar