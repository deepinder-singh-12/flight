import React from "react";
import SearchBar from "../Feature/SearchBar";
import { Box, Container, Typography } from "@mui/material";
import "./TopBar.css";

const TopBar = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "350px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Typography variant="h4">FIND YOUR FLIGHT</Typography>
        <SearchBar />
      </Container>
      <Box className="hero">
        <Typography variant="h1">YXY</Typography>
      </Box>
    </Box>
  );
};

export default TopBar;
