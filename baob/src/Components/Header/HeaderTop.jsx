import CheckIcon from "@mui/icons-material/Check";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Language from "./Language";
import "./HeaderCss/HeaderCss.css"

export const HeaderTop = () => {
    return (
        <Box className = "headerTopGeneral">
            <Box sx={{ display: "flex" }}>
                <CheckIcon className="headerTopCheckIcon"/>
                <Typography className="headerTopTitle">Free Shipping On All Orders Over 50$</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
                <Language />
                <Typography className="headerTopTitle">Faqs</Typography>
                <ErrorOutlineIcon className="headerTopErrorOutlineIcon"/>
                <Typography style={{ color: "#BEBDC7", fontSize: "15px", paddingLeft: "6px" }} >
                    Need Help
                </Typography>
            </Box>
        </Box>
    );
}

