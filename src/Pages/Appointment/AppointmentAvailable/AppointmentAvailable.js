import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Cosmetic Dentistry',
        time: '08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Teeth Cleaning',
        time: '09.00 AM - 10.00 AM',
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Orthodonics',
        time: '11.00 AM - 12.00 AM',
        space: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '08.00 AM - 10.00 AM',
        space: 11
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '09.00 AM - 11.00 AM',
        space: 7
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '08.00 AM - 11.00 AM',
        space: 13
    },
];

const AppointmentAvailable = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <Container>
            <Typography sx={{ color: 'success.main', my: 4, fontWeight: 500 }} variant="h4">Available Appointments on {date.toDateString()}</Typography>
            {
                bookingSuccess && <Alert severity="success">Appointment Booked Successfully!</Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AppointmentAvailable;