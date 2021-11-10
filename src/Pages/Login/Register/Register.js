import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../Images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleonBlur = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = event => {
        if (loginData.password !== loginData.passwordRetype) {
            alert('Your password did not matched');
            return;
        }

        registerUser(loginData.email, loginData.password, loginData.name, history,);
        event.preventDefault();
    }
    return (
        <Container>
            <Grid sx={{ mt: 8 }} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>

                        {/* Name */}
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            label="Your name"
                            type="text"
                            name="name"
                            onBlur={handleonBlur}
                            placeholder="Your name"
                            variant="standard" />

                        {/* Email */}
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            // id="standard-basic"
                            label="Your email"
                            type="email"
                            name="email"
                            onBlur={handleonBlur}
                            placeholder="example@gmail.com"
                            variant="standard" />

                        {/* Password */}
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            // id="standard-basic"
                            label="Your password"
                            placeholder="password"
                            type="password"
                            name="password"
                            onBlur={handleonBlur}
                            variant="standard" />

                        {/* Re-type Password */}
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            // id="standard-basic"
                            label="Re-type your password"
                            placeholder="re-type password"
                            type="password"
                            name="passwordRetype"
                            onBlur={handleonBlur}
                            variant="standard" />

                        <Button
                            variant="contained"
                            sx={{ width: "75%", mt: 2, mb: 2 }}
                            type="submit"
                        >Register</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login"
                        ><Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {
                        user?.email && <Alert severity="success">Congratulations! You're successfully registered!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;