import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import "./HeaderCss/HeaderCss.css";

export const SearchComponent = () => (
    <Box >
        <TextField
        className = "searchComponentText"
            variant="standard"
            placeholder="Search here..."
            InputProps={{
                endAdornment: (
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                )
            }}
        />
    </Box>
);
