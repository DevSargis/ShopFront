import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

export const SearchComponent = () => (

    <Box >
        <TextField
            variant="standard"
            placeholder="Search here..."
            size="small"
            sx={{
                position: "relative",
                width: "413px",
                height: "44px",
                top: "5px",
                background: "#FFFFFF",
                borderRadius: "5px",
                flex: "none",
                order: 1,
                flexGrow: 0
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
