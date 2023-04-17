import CheckIcon from "@mui/icons-material/Check";
import { Box, FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import React from "react";

export const Header = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box sx={{ backgroundColor: "#272343" }}>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            left: "150px",
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
      </Box>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </>
  );
};
