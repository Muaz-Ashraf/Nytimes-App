import {
  ArrowBack,
  ArrowForward,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const StoryDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { story } = location.state;
  console.log(story);

  return (
    <>
      {story ? (
        <Container>
          <Typography fontWeight={"bold"} fontSize={"1.5rem"}>
            {story.title}
          </Typography>
          <Typography variant="body" textAlign={"justify"}>
            {story.abstract}
          </Typography>
          <Typography fontStyle={"italic"}>{story.byline}</Typography>
          <img height="250px" width="auto" src={story.multimedia[0].url} />{" "}
          <Typography fontWeight={"bold"} fontSize={"1rem"}>
            Topics
          </Typography>
          {story.des_facet.map((item) => {
            return (
              <>
                <ul>
                  <li>{item}</li>
                </ul>
              </>
            );
          })}
          <Typography>
            You can read the complete article here:{" "}
            <Link to={story.url}>
              <Button
                variant="outlined"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    "& .MuiButton-endIcon": {
                      transform: "rotate(-45deg)",
                    },
                    bgcolor: "red",
                    color: "white",
                  },
                }}
                endIcon={<ArrowForward />}
              >
                NYTIMES
              </Button>
            </Link>
          </Typography>
          <Box sx={{ my: 5 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                "&:hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
              startIcon={<ArrowBack />}
              onClick={() => navigate("/")}
            >
              Back to Articles
            </Button>
          </Box>
        </Container>
      ) : (
        <p>No Story found</p>
      )}
    </>
  );
};

export default StoryDetails;
