import {
	Box,
	Card,
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
		<Grid
			container
			spacing={2}
			style={{ display: "flex", flexWrap: "wrap" }}
		>
			<Grid
				item
				xs={6}
			>
				<Select
					fullWidth
					placeholder="Select Category"
				>
					<MenuItem value="World">World</MenuItem>
					<MenuItem value="Science">Science</MenuItem>
				</Select>
			</Grid>
			<Grid
				item
				xs={6}
			>
				<TextField
					fullWidth
					label="Search for article"
				/>
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
							alignItems: "center",
							bgcolor: "lightblue",
							py: 5,
							px: 3,

							transition: "all 0.2s ease-in-out",
							"&:hover": {
								bgcolor: "blue",
								color: "white",
								cursor: "pointer",
							},
						}}
					>
						<Typography fontWeight="bold">
							{index + 1}.{story.title}
						</Typography>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default TopStoriesList;
