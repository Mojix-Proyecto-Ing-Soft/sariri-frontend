import React, {useState, useContext} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MuiPhoneNumber from 'material-ui-phone-number';
import HouseIcon from '@mui/icons-material/House';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {GoogleContext} from "../context/googleContext";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        Sariri
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({});

export default function SignIn() {

  const {user} = useContext(GoogleContext)
  
  
  const [phoneNumber, setPhoneNumber] = React.useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      phone: phoneNumber
    });
  }
   
 const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    }
 
 const postUser = async (n)=> {
        console.log("El usuario "+user.given_name+" "+user.family_name+" con celu "+n+" y correo "+user.email+" va a ingresar")
        try {
            const response = await axios.post('/register', {
                user_name: user.given_name,
                user_lastname: user.family_name,
                user_phone: n,
                user_email: user.email
            })
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }
    }


  return (
    <ThemeProvider theme={theme}>
        
      <Container component="main" maxWidth="m" sx={{backgroundImage: 'url(../assets/bolivia2.jpg)'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#fff',
          }}
        >
            <Typography component="h1" variant="h4" sx={{ mt: 3, mb: 3,fontWeight: 'bold' }}>
            Tu viaje comienza junto a Sariri!
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <HouseIcon />
          </Avatar>
          <Typography component="h1" variant="h5" marginBottom={3}>
            Ingresar
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <div  color="primary"
                    type="submit"
                    align="center"
                    fullWidth={true}
                    variant="contained"  
                    sx={{ mt: 10, mb: 6 }} id='signInDiv'></div>
            <MuiPhoneNumber defaultCountry={'us'} onChange={(value)=>{handlePhoneNumberChange(value)}} value={phoneNumber}
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Ingrese su numero de telefono"
            name="phone"
            autoFocus
            />
            
            <Button
            // href="/home"
            underline="none"
            color= "primary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            onClick={() => postUser(phoneNumber)}>
              Conectar
            </Button>

              <Button
                  href="/home"
                  underline="none"
                  color= "primary"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => postUser(phoneNumber)}>
                  Skip
              </Button>
           
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      
    </ThemeProvider>
  );
}
