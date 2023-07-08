import {
  Outlet,
  Route,
  Router,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import TopStoriesList from "./TopStoriesList";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
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
import SearchBy from "./SearchBy";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <SearchBy />

      <Routes>
        <Route path="/category" element={<TopStoriesList />} />
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
