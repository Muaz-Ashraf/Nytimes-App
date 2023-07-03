import {
	Box,
	Button,
	Container,
	ImageList,
	ImageListItem,
	List,
	ListItem,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const StoryDetails = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const { story } = location.state;
	console.log(story);
	if (!story) {
		// Handle the case when the story object is null or undefined
		return <div>No story found</div>;
	}

	return (
		<>
			<Container>
				<Typography fontWeight={"bold"}>{story.title}</Typography>
				<Typography variant="body">{story.abstract}</Typography>

				<Typography fontStyle={"italic"}>{story.byline}</Typography>

				<img
					height="250px"
					width="auto"
					src={story.multimedia[0].url}
				/>

				{/* {story.des_facet.map((name) => {
					<Typography>{name}</Typography>;
				})} */}
				<Typography>
					You can read the complete article here:{" "}
					<Link
						style={{ fontSize: "0.8rem" }}
						to={story.url}
					>
						{story.url}
					</Link>
				</Typography>
				<Button onClick={() => navigate("/")}>Back to Articles</Button>
			</Container>{" "}
		</>
	);
};

export default StoryDetails;
