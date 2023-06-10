import { Box } from "@mui/material";
import logo from "../../Images/Logo.jpg"
import { SearchComponent } from "./SearchComponent";
import { UserLinks } from "./UserLinks";
import "./HeaderCss/HeaderCss.css"

export const HeaderMiddle = () => {
    return (
        <Box className = "headerMiddleGeneral">
            <Box className="headerMiddleImageBox">
                <Box component="img" src={logo} width={80} height={70}/>
                {/* <Typography className="headerMiddleTitle">Comforty</Typography> */}
            </Box>
            <SearchComponent />
            <UserLinks />
        </Box>
    )
};
