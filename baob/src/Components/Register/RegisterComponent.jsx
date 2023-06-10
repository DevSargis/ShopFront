import { Box, TextField, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import './RegisterCss/registerComponent.css'
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Button } from "@material-ui/core";
import {request} from "../../Helpers/fetch_helper.js"

export const RegisterComponent = () => {
    const [isVisible, setVisible] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(true)
    const [phoneIsValid, setPhoneIsValid] = useState(true)
    const [repeatPasswordIsMatchet, setRepeatPasswordIsMatchet] = useState(true)

    const setIsVisible = () => {
        setVisible(!isVisible);
    };
    const [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '+374',
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

      const handleChangeEmailFiled=(email)=>{
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        setEmailIsValid(emailRegex.test(email));
      }

      const handleChangePassword=(repeatPassword, password)=>{
        setRepeatPasswordIsMatchet(password === repeatPassword);
      }

      const handleChangePhoneFiled=(phone)=>{
        const armenianPhoneRegex =  /^(\+?374|0)(9[345678]|5[012345679]|77)[0-9]{6}$/;
        setPhoneIsValid(armenianPhoneRegex.test(phone));
      }

      const handleSignUp = () => {
        if(emailIsValid && phoneIsValid && repeatPasswordIsMatchet){
            request("POST", "/api/v1/users/register", registerData)
            return;
        }
        alert("Please rectify your data")
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
            <TextField placeholder="+374" className="inp1" 
                       value={registerData.phoneNumber}
                       onChange={(event) => {
                        handleChange('phoneNumber')(event)
                        handleChangePhoneFiled(event.target.value)
                        }}
                       error={!phoneIsValid}
                       label={phoneIsValid ? "": "Wrong Phone"}
                       />
            <TextField placeholder="Email" className="inp1" 
                       value={registerData.email}
                       onChange={(event) =>{ 
                        handleChange('email')(event)
                        handleChangeEmailFiled(event.target.value)
                        }}
                       error={!emailIsValid}
                       label={emailIsValid ? "": "Wrong Email"}
                       />

            <TextField className="inpPasswordRegister" placeholder="Password" type={isVisible ? 'text' : "password"} InputProps={{
                endAdornment: (
                    <IconButton onClick={setIsVisible}>
                        <VisibilityIcon />
                    </IconButton>
                )
            }}  
            value={registerData.password}
            onChange={(event) =>{ 
                handleChange('password')(event)
                handleChangePassword(registerData.repeatPassword, event.target.value)
                }
                }
            />
            <TextField className="inpPasswordRegister" placeholder="Repeat password" type={isVisible ? 'text' : "password"} InputProps={{
                endAdornment: (
                    <IconButton onClick={setIsVisible}>
                        <VisibilityIcon />
                    </IconButton>
                )
            }} 
            value={registerData.repeatPassword}
            onChange={(event) => {
                handleChange('repeatPassword')(event)
                handleChangePassword(event.target.value, registerData.password)
            }}
            error={!repeatPasswordIsMatchet}
            label={repeatPasswordIsMatchet ? "": "Password is not matched"}
            />

        </Box>
        <Button className="signBtnRegister" onClick={handleSignUp}>Sign Up</Button>
    </Box>
    )
};