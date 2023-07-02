import { Outlet, Route, Router, Routes } from "react-router-dom";
import TopStoriesList from "./TopStoriesList";
import {
  Box,
  Card,
  Grid,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import StoryDetails from "./StoryDetails";

function App() {
  return (
    <>
      <Typography fontSize={"3rem"} fontWeight={"bold"}>
        NYTIMES APP
      </Typography>

      <Routes>
        <Route path="/" element={<TopStoriesList />} />
        <Route path="/details" element={<StoryDetails />} />
      </Routes>
    </>
  );
}

export default App;
