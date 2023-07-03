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

function App() {
	return (
		<>
			<Typography
				sx={{ display: "flex", justifyContent: "center", m: 2 }}
				fontSize={"3rem"}
				fontWeight={"bold"}
				fontFamily={"Roboto"}
			>
				NYTIMES APP
			</Typography>

			<Routes>
				<Route
					path="/"
					element={<TopStoriesList />}
				/>
				<Route
					path="/details/:index"
					element={<StoryDetails />}
				/>
			</Routes>
		</>
	);
}

export default App;
