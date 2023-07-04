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

function App() {
	return (
		<>
			<NytSvg />
			<Container>
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
			</Container>
		</>
	);
}

export default App;
