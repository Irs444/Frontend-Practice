import React, { useState } from 'react'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from "@mui/icons-material/Notifications"

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "#fff",
    padding: "0px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "30%"
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        display: "flex"
    }
}))

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography sx={{ display: { xs: "none", md: "block" } }}>LAMBA DEV</Typography>
                <PetsIcon sx={{ display: { xs: 'block', md: "none" } }} />
                <Search><InputBase placeholder='search.....' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={e => setOpen(true)} sx={{ width: 30, height: 30 }} src='https://clipground.com/images/avatar-png-images-18.png' />
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src='https://clipground.com/images/avatar-png-images-18.png' />
                    <Typography>John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar