import { Box, Typography } from "@mui/material";
import UserIcon from "../../Images/UserIcon.svg";
import Cart from "../../Images/Cart.svg";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Language from "./Language";
import { Link } from 'react-router-dom';


export const UserLinks = () => {

    // const handleUserIconClick = () => {

    // }

    return (<Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex" }}>
            <Language />
            <Box component="img" src={Cart} width={40} height={22} />
            <Typography style={{ paddingLeft: "4px" }}>Cart</Typography>
            <Box className="headerTopUsersLinksGeneral">
                <Typography className="headerTopUsersLinksTypo">0</Typography>
            </Box>
            <FavoriteBorderIcon width={40} height={22} sx={{ marginLeft: "40px" }} />
            <Link to="/login">
                <Box component="img" src={UserIcon} width={40} height={22} />
            </Link>
        </Box>
    </Box>
    )
};
