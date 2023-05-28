import { Box, TextField, Typography } from "@mui/material";
import './LoginCss/loginComponent.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import { Button } from "@material-ui/core";

export const LoginComponent = () => {
    const [isVisible, setVisible] = useState(false);
    const setIsVisible = () => {
        setVisible(!isVisible);
    };
    return (
        <>
            <Box className='generalLogin' >
                <Typography className='signInTextLogin'>Sign In</Typography>
                <Box className="inpLogin">
                    <TextField placeholder="Email" />
                    <TextField className="inpPasswordLogin" placeholder="Password" type={isVisible ? 'text' : "password"} InputProps={{
                        endAdornment: (
                            <IconButton onClick={setIsVisible}>
                                <VisibilityIcon />
                            </IconButton>
                        )
                    }} />
                </Box>
                <Box className = "optionLogin" >
                    <FormControlLabel control={<Checkbox />} label="Remember Me" />
                    <Link className = "forgetLogin"  component="button" underline="none" to="/home">
                        Forget Password
                    </Link>
                </Box>
                <Button className="signBtnLogin">Sign In</Button>
                <Box className = "signUpLogin">
                        <Box>Don't have account?</Box>
                        <Link color={"#007580"}  href="/register">Sing Up</Link>
                </Box>
            </Box>
            
        </>
    )
};