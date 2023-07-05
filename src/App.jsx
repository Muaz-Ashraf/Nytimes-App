import { Outlet, Route, Router, Routes } from "react-router-dom";
import TopStoriesList from "./TopStoriesList";
import {
  Box,
  Card,
  Container,
  Grid,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import StoryDetails from "./StoryDetails";
import NytSvg from "./NytSvg";
import SearchStories from "./SearchStories";

function App() {
  return (
    <>
      <NytSvg />

      <Routes>
        <Route path="/" element={<TopStoriesList />} />
        <Route path="/details/:index" element={<StoryDetails />} />
        <Route path="/search" element={<SearchStories />} />
      </Routes>
    </>
  );
}

export default App;
