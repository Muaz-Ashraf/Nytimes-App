import React from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/register",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        backgroundColor: "#f5f5f5",
        borderRadius: 1,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography variant="h5" fontWeight={"bold"} gutterBottom>
        Registration
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          {...register("email")}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          {...register("password")}
          sx={{ marginBottom: 2 }}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
      </form>
      <Stack mt={1} direction={"row"} alignItems={"center"} spacing={2}>
        <Typography>Already have an account</Typography>
        <Button onClick={() => navigate("/")}>Login</Button>
      </Stack>
    </Container>
  );
};

export default Registration;
