import {
  Box,
  Card,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TopStoriesList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=vpPk0dSc3wlSGZUQriw78bkglP22tr2E"
    );
    const responseData = await response.json();
    setData(responseData.results);
    console.log(responseData.results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2} px={"50px"}>
      <Grid item xs={6} px={"100px"}>
        <Select fullWidth placeholder="Select Category">
          <MenuItem>World</MenuItem>
          <MenuItem>Science</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={6} px={"100px"}>
        <TextField fullWidth label="Search for article" />
      </Grid>
      {data?.map((story, index) => {
        return (
          <Grid key={index} item xs={6} md={4} lg={3}>
            {/* <Link
              to={{
                pathname: `/details`,
                state: { story: story },
              }}
              style={{ textDecoration: "none" }}
            > */}
            <Card
              onClick={() => navigate("/details", { state: { story: story } })}
              sx={{
                p: 2,
                bgcolor: "lightblue",
                display: "flex",
                height: "80%",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  bgcolor: "blue",
                  color: "white",
                  cursor: "pointer",
                },
              }}
            >
              <Stack direction={"column"} spacing={3}>
                <Typography fontWeight={"bold"}>{story.title}</Typography>
                <Typography variant="body">{story.abstract}</Typography>
              </Stack>
            </Card>
            {/* </Link> */}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TopStoriesList;
