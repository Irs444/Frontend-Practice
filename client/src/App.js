import React from 'react'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import { Box, Stack } from "@mui/material"
import RightBar from './components/RightBar'
import Navbar from './components/Navbar'
import Add from './components/Add'

const App = () => {
  return (
    <Box >
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
      <Add/>
    </Box>
  )
}

export default App