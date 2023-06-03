import { Box, TextField, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import './RegisterCss/registerComponent.css'
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Button } from "@material-ui/core";
import {request, setAuthHeader} from "../../Helpers/fetch_helper.js"

export const RegisterComponent = () => {
    const [isVisible, setVisible] = useState(false);
    const setIsVisible = () => {
        setVisible(!isVisible);
    };
    const [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: 0,
        email: '',
        password: '',
        repeatPassword: ''
      });

      const handleChange = (field) => (
        event
      ) => {
        setRegisterData((prevData) => ({
          ...prevData,
          [field]: event.target.value
        }));
      };
      const handleSignUp = () => {
        const s = request("POST", "/api/v1/users/register", registerData)
        s.then(response => setAuthHeader(response.token))
      };
    
    return (
        <Box className='generalRegister' >
        <Typography className='signInTextRegister'>Sing Up</Typography>
        <Box className="inpRegister">
            <TextField placeholder="First Name" 
                       className="inp1"
                       value={registerData.firstName}
                       onChange={(event) => handleChange('firstName')(event)}
           />
            <TextField placeholder="Last Name" 
                       className="inp1" 
                       value={registerData.lastName}
                       onChange={(event) => handleChange('lastName')(event)}
            />
            <TextField placeholder="Number" className="inp1" 
                       value={registerData.phoneNumber}
                       onChange={(event) => handleChange('phoneNumber')(event)}/>
            <TextField placeholder="Email" className="inp1" 
                       value={registerData.email}
                       onChange={(event) => handleChange('email')(event)}/>
            <TextField className="inpPasswordRegister" placeholder="Password" type={isVisible ? 'text' : "password"} InputProps={{
                endAdornment: (
                    <IconButton onClick={setIsVisible}>
                        <VisibilityIcon />
                    </IconButton>
                )
            }}  
            value={registerData.password}
            onChange={(event) => handleChange('password')(event)}
            />
            <TextField className="inpPasswordRegister" placeholder="Repeat password" type={isVisible ? 'text' : "password"} InputProps={{
                endAdornment: (
                    <IconButton onClick={setIsVisible}>
                        <VisibilityIcon />
                    </IconButton>
                )
            }} />
        </Box>
        <Button className="signBtnRegister" onClick={handleSignUp}>Sign Up</Button>
    </Box>
    )
};