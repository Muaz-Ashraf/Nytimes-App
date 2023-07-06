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
import Navbar from "./Navbar";
import Login from "./Login";
import Registration from "./Registration";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TopStoriesList />} />
        <Route path="/details/:index" element={<StoryDetails />} />
        <Route path="/search" element={<SearchStories />} />
      </Routes>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes> */}
    </>
  );
}

export default App;
