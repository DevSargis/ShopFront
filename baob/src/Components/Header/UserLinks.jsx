import { Box, Typography } from "@mui/material";
import UserIcon from "../../Images/UserIcon.svg";
import Cart from "../../Images/Cart.svg";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Language from "./Language";

export const UserLinks = () => {
    return (<Box sx={{
        display: "flex"
    }}>
        <Box sx={{display:"flex"}}>
            <Language />
            <Box component="img" src={Cart} width={40} height={22} /> 
            <Typography style={{paddingLeft:"4px"}}>Cart</Typography>
            <Box sx={{width: "20px", height: "20px", background: "#007580", borderRadius:"50%", position:"relative", top:"2px", left:"10px"}}>
                <Typography sx={{fontFamily:"'DM Sans'",
                fontStyle:"normal",
                fontWeight:"500",
                fontSize:"10px",
                lineHeight:"100%",
                textAlign:"center",
                textTransform:"capitalize",
                position: "relative",
                top: "5px",
                color:"#FFFFFF"}}>0</Typography>
            </Box>
            <FavoriteBorderIcon width={40} height={22}  sx={{marginLeft:"40px"}}/>
            <Box component="img" src={UserIcon} width={40} height={22} /> 
        </Box>
     </Box>   
     )        
};
