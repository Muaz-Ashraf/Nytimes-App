import {
  Box,
  Card,
  Grid,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
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
    <>
      <Typography fontSize={"3rem"} fontWeight={"bold"}>
        NYTIMES APP
      </Typography>
      <Grid container spacing={2} px={"50px"}>
        <Grid item xs={6} px={"100px"}>
          <Select fullWidth placeholder="Select Category"></Select>
        </Grid>
        <Grid item xs={6} px={"100px"}>
          <TextField fullWidth label="Search.." />
        </Grid>
        {data?.map((story) => {
          return (
            <Grid item xs={6} md={4} lg={3}>
              <Card
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
                key={story.title}
              >
                <Stack direction={"column"} spacing={3}>
                  <Typography fontWeight={"bold"}>{story.title}</Typography>
                  <Typography variant="body">{story.abstract}</Typography>
                </Stack>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default App;
