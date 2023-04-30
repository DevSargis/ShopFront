import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Language() {
  return (   
      <Select
        value={1}
        IconComponent={KeyboardArrowDownIcon}
        style={{ padding: "0px !important", outline: "none" }}
        sx={{
          color: "black",
          boxShadow: 'none',
          '.MuiOutlinedInput-notchedOutline': { border: 0 },
          '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': { paddingTop: "0px !important", paddingBottom: "0px !important" },
          '& .MuiSvgIcon-root': { color: "blcak" }
        }}
      >
        <MenuItem value={1}>Eng</MenuItem>
      </Select>
  );
}