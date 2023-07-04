import {
  Box,
  Card,
  CircularProgress,
  Container,
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
  const [loading, setLoading] = useState(true); // Added loading state

  const getData = async () => {
    const response = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=vpPk0dSc3wlSGZUQriw78bkglP22tr2E"
    );
    const responseData = await response.json();
    setData(responseData.results);
    setLoading(false);
    console.log(responseData.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <Grid
          container
          spacing={2}
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <Grid item xs={6}>
            <Select fullWidth placeholder="Select Category">
              <MenuItem value="World">World</MenuItem>
              <MenuItem value="Science">Science</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Search for article" />
          </Grid>
          {data?.map((story, index) => (
            <Grid
              key={index}
              item
              xs={6}
              md={4}
              lg={3}
              sx={{ display: "flex" }}
            >
              <Card
                onClick={() =>
                  navigate(`/details/${index}`, { state: { story: story } })
                }
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",

                  bgcolor: "#202020",
                  color: "white",
                  py: 2,
                  px: 3,
                  border: "2px solid black",

                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    bgcolor: "#606060",

                    cursor: "pointer",
                  },
                }}
              >
                <Stack direction="column">
                  <Typography
                    fontWeight="bold"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      borderBottom: "2px solid white",
                    }}
                  >
                    {index + 1}.
                  </Typography>
                  <Typography py={2}>{story.title}</Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default TopStoriesList;
