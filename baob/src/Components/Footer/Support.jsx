import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./FooterCss/FooterCss.css"

export default function Support  (){
    return (
        <>
            <Box>
                <Typography className="supportTitle">SUPPORT</Typography>
                <Box className="supportLists">
                 <Typography>Help & Support</Typography>
                 <Typography>Tearms & Conditions</Typography>
                 <Typography>Privacy Policy</Typography>
                 <Typography>Help</Typography>
                </Box>
            </Box>
        </>
    )
};