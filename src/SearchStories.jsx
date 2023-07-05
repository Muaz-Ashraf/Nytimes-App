import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import axios from "axios";
import Loader from "./Loader";
import { motion } from "framer-motion";
import Animation from "./Animation";

const SearchStories = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=vpPk0dSc3wlSGZUQriw78bkglP22tr2E`
    );

    setData(response.data.response.docs);
    setLoading(false);
    console.log(response);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setLoading(true);
    getData();
  };

  return (
    <Container sx={{ mb: 4 }}>
      <form onSubmit={handleSubmit}>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{
            mb: 2,

            justifyContent: "center",
          }}
        >
          <TextField
            name="search"
            id="search"
            placeholder="Search for articles"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            sx={{ bgcolor: "black", "&:hover": { bgcolor: "#00000095" } }}
            variant="contained"
            type="submit"
          >
            Search
          </Button>
        </Stack>
      </form>
      {loading && isSubmitted ? (
        <Loader />
      ) : (
        <Animation>
          <Grid
            container
            spacing={2}
            style={{ display: "flex", flexWrap: "wrap" }}
          >
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
                    <Typography py={2}>{story.headline.main}</Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>{" "}
        </Animation>
      )}
    </Container>
  );
};

export default SearchStories;
