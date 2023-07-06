import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import React from "react";
import NytSvg from "./NytSvg";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        bgcolor: "lightgray",
        position: "static",
        height: "60px",
        mb: "10px",
      }}
    >
      <Toolbar>
        <NytSvg />
        {/* <IconButton onClick={() => navigate("/")}>
          <ArrowBack />
        </IconButton> */}

        {/* <Button onClick={() => navigate("/login")}>Login</Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
