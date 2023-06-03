import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./HeaderCss/HeaderCss.css"

export default function Language() {
  return (   
      <Select
        value={1}
        IconComponent={KeyboardArrowDownIcon}
        className='language'
      >
        <MenuItem value={1}>Eng</MenuItem>
      </Select>
  );
}