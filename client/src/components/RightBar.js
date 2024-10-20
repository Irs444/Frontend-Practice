import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'

const RightBar = () => {
    return (
        <Box flex={2} sx={{ display: { xs: "none", md: "block" } }} p={2}>
            <Box position="fixed">
                <Typography>Online Friends</Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="Remy Sharp" src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg" />
                    <Avatar alt="Travis Howard" src="https://png.pngtree.com/png-clipart/20220909/original/pngtree-cartoon-man-avatar-vector-ilustration-png-image_8515463.png" />
                    <Avatar alt="Cindy Baker" src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography>Latest Photos</Typography>
            </Box>
        </Box>
    )
}

export default RightBar