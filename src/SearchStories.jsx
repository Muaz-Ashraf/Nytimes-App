import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
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
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const SearchStories = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [search, setSearch] = useState("");
  const [errorMsg, setErrorMsg] = useState();
  const [searchResults, setSearchResults] = useState();

  const getData = async () => {
    try {
      setErrorMsg(null);
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&page=${page}&api-key=vpPk0dSc3wlSGZUQriw78bkglP22tr2E`
      );

      setData(response.data.response.docs);
      setLoading(false);
      console.log(response);
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMsg(error.response);
      setLoading(false);
      setPage(0);
      setSearchResults();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setLoading(true);
    setSearchResults(search);
    getData();
    setSearch("");
    setPage(0);
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
            InputProps={{
              style: { backgroundColor: "#202020", color: "white" },
            }}
            size="small"
            name="search"
            id="search"
            placeholder="Search for articles"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            disabled={(loading || search === "") && true}
            sx={{ bgcolor: "black", "&:hover": { bgcolor: "#00000095" } }}
            variant="contained"
            type="submit"
          >
            Search
          </Button>
        </Stack>
      </form>
      {errorMsg && (
        <Typography mt={5} color="red" textAlign={"center"}>
          Status Code {errorMsg.status} - {errorMsg.statusText}
        </Typography>
      )}
      {loading && isSubmitted ? (
        <Loader />
      ) : (
        <Animation>
          {searchResults && (
            <Stack direction={"row"} alignItems={"center"} my={1} spacing={1}>
              <Typography fontWeight={"bold"}>Search Results for:</Typography>
              <Typography>{searchResults}</Typography>
            </Stack>
          )}
          <Grid
            container
            spacing={2}
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {!errorMsg &&
              data?.map((story, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
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
                        {index + 1 * page * 10 + 1}.
                      </Typography>
                      <Typography py={2}>{story.headline.main}</Typography>
                    </Stack>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Animation>
      )}
      {!errorMsg && data && (
        <Stack
          direction={"row"}
          mt={2}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            disabled={loading || page === 0 ? true : false}
            onClick={() => {
              setPage((prevPage) => prevPage - 1);
              setLoading(true);
              getData();
            }}
          >
            <ArrowBack />
            Previous
          </Button>

          <Typography textAlign={"center"} fontWeight={"bold"}>
            Page {page + 1}
          </Typography>
          <Button
            disabled={loading && true}
            onClick={() => {
              setPage((prevPage) => prevPage + 1);
              setLoading(true);
              getData();
            }}
          >
            Next
            <ArrowForward />
          </Button>
        </Stack>
      )}
    </Container>
  );
};

export default SearchStories;
