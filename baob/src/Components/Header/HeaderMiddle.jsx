import { Box } from "@mui/material";
import logo from "../../Images/Logo.svg"
import Typography from "@mui/material/Typography";
import { SearchComponent } from "./SearchComponent";
import { UserLinks } from "./UserLinks";


export const HeaderMiddle = () => {
    return (
        <Box sx={{
            height: "84px",
            background: "#F0F2F3",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 200px",
            gap: "150px"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "0px",
                gap: "8px",
                width: "166px",
                height: "40px",
                flex: "none",
                order: "0",
                flexGrow: "0"
            }}>
            <Box component="img" src={logo} />
            <Typography sx={{
                width: "118px",
                height: "31px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "26px",
                lineHeight: "120%",
                color: "#272343",
                flex: "none",
                order: 1,
                flexGrow: 0
            }}>Comforty</Typography>
            </Box>
            <SearchComponent />
            <UserLinks />
        </Box>

    )

};
