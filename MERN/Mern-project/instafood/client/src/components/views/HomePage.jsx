import { Box, useMediaQuery } from "@mui/material";
import React from 'react'
// import UserWidget from "../scene/UserWidget"
// import { useSelector } from "react-redux";

import Navbar from './Navbar'
const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  // const { _id, picturePath } = useSelector((state) => {state.user});
  

  return (
    <Box>
      <Navbar/>
      <Box
        width="100%"
        padding="2rem 6%"
        display={"block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          {/* <UserWidget /> */}
        </Box>
          </Box>
       
      </Box>
  )
}

export default HomePage
