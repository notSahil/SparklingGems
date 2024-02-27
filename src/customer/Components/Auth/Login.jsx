import * as React from "react";
import { Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Redux/Auth/Action";
import axios from 'axios';
import { API_BASE_URL } from "../../../config/api";

export default function LoginUserForm({ handleNext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const { auth } = useSelector((store) => store);
  const handleCloseSnakbar = () => setOpenSnackBar(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const userData = {
      email: email,
      password: data.get("password"),
    };

    try {
      console.log("userdata:--",userData);
      // Fetch user data from the API endpoint
      const response = await axios.get(`${API_BASE_URL}/api/admin/Customer/users`);
      const users = response.data;

      // Match email with the provided data
      const matchedUser = users.find((user) => user.email === email);
      console.log("matched user---",matchedUser.role);
      

      

      if (matchedUser && matchedUser.role === "ROLE_USER") {
        // Redirect to user page if the role is "ROLE_USER"
        navigate("/admin"); // or navigate to the user panel if there's one
      } else {
        // Redirect to admin page if the role is not "ROLE_USER" or no user is found
        navigate("/");
      }
      

      // Dispatch login action after handling redirection
      dispatch(login(userData));
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle error fetching user data
    }
  };

  return (
    <React.Fragment className=" shadow-lg ">
      <form className="w-full" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="given-name"
              type="password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnakbar}>
        <Alert onClose={handleCloseSnakbar} severity="success" sx={{ width: '100%' }}>
          {auth.error ? auth.error : auth.user ? "Register Success" : ""}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
