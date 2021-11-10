import { Button, Container, Grid, TextField, Typography, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../Images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError, isLoading, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = event => {
        loginUser(loginData.email, loginData.password, location, history);
        event.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid sx={{ mt: 8 }} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            // id="standard-basic"
                            label="Your email"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            placeholder="example@gmail.com"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            // id="standard-basic"
                            label="Your password"
                            placeholder="password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button
                            variant="contained"
                            sx={{ width: "75%", mt: 2, mb: 2 }}
                            type="submit"
                        >Login</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register"
                        ><Button variant="text">Are you new user? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {
                            user?.email && <Alert severity="success">Congratulations! You're successfully logged in!</Alert>
                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                    </form>
                    <Button sx={{ marginTop: 4 }} onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;