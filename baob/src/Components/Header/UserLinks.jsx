import { Box, Typography } from "@mui/material";
import Favorite from "../../Images/Favorite.svg";
import UserIcon from "../../Images/UserIcon.svg";
import Cart from "../../Images/Cart.svg";

export const UserLinks = () => (
    <Box sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "0px",
        gap: "12px",
        width: "232px",
        height: "44px",
        flex: "none",
        order: "2",
        flexGrow: "0"
    }}>
        <Box sx={{display:"flex"}}>
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
            <Box component="img" src={Favorite} width={40} height={22} sx={{paddingLeft:"40px"}} /> 
            <Box component="img" src={UserIcon} width={40} height={22} /> 
        </Box>
     </Box>       

);
