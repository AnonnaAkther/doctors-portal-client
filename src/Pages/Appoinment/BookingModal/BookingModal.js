import { Fade, Modal, Typography, Button } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import React from 'react';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBooking, booking, date, handleBookingClose}) => {
    const {name, time} = booking;

    const handleBookingSubmit = e => {
        alert('Submition Successfully');

        // collect data
        // send to the server

        handleBookingClose();
        e.prevenDefault()
    }

    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleBookingSubmit}>
            <TextField
            disabled
            sx={{width: '90%', m: 1}}
            id="outlined-size-small"
            defaultValue={time}
            size="small"
        />
            <TextField
            sx={{width: '90%', m: 1}}
            id="outlined-size-small"
            placeholder='Your Name'
            size="small"
        />
            <TextField
            sx={{width: '90%', m: 1}}
            id="outlined-size-small"
            placeholder='Your Email'
            size="small"
        />
            <TextField
            sx={{width: '90%', m: 1}}
            id="outlined-size-small"
            placeholder='Phone Number'
            size="small"
        />
            <TextField
            sx={{width: '90%', m: 1}}
            id="outlined-size-small"
            defaultValue={date.toDateString()}
            size="small"
        />
        <Button type="submit" variant="contained">Submit</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};


const {a, b} = {x:2, y:3}
console.log(b);


export default BookingModal;