import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

export const SearchComponent = () => (

    <Box >
        <TextField
            variant="standard"
            placeholder="Search here..."
            sx={{
                position: "relative",
                width: "413px",
                height: "44px",
                top: "5px",
                background: "#FFFFFF",
                borderRadius: "5px",
            }}
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
