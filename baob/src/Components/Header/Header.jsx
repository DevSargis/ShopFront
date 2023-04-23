import CheckIcon from "@mui/icons-material/Check";
import { Box } from "@mui/material";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import React from "react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const Header = (props) => {

  return (
    <>
      <Box sx={{ backgroundColor: "#272343", display:"flex" }}>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            left: "300px",
          }}
        >
          <CheckIcon
            style={{
              color: "#BEBDC7",
              width: "20px",
              height: "20px",
              marginRight: "5px",
            }}
          />
          <Typography style={{ color: "#BEBDC7", fontSize: "15px" }}>
            Free Shipping On All Orders Over 50$
          </Typography>
        </Box>
        <Box sx={{
          display: "flex",
          position: "relative",
          left: "1098px",
        }}>
          <Typography style={{ color: "#BEBDC7", fontSize: "15px"}}>
            Faqs
          </Typography>
          <Box  sx={{
          display: "flex",
          position: "relative",
          left: "24px"}}>
            <ErrorOutlineIcon sx={{ width: "16px", height: "16px", paddingLeft: "10px", color: "#FFFFFF", paddingTop:"3.5px" }} />
            <Typography style={{ color: "#BEBDC7", fontSize: "15px", paddingLeft: "6px"}} >
              Need Help
            </Typography>
          </Box>
        </Box>
      </Box>

    </>
  );
};
