import React, { useState } from 'react'
import { Box, Fab, Modal, styled, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const StyleModal = styled(Modal)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
   
})

const Add = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip onClick={e => setOpen(true)} sx={{ position: "fixed", bottom: 15, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyleModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box  height={280} bgcolor={"white"} borderRadius={5} p={2} sx={{width:{xs:320 , md:500}}}> 
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>

                </Box>
            </StyleModal>
        </>
    )
}

export default Add