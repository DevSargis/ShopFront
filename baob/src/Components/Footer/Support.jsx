import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";


export default function Support  (){

    return (
        <>
            <Box>
                <Typography sx={{
                    color:"#9A9CAA",
                    letterSpacing: "0.06em",
                    height: "31px",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "25.2px",
                    paddingLeft: "5px"
                }}>SUPPORT</Typography>
                <Box sx={{
                    color:"#272343",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontSize: "12px",
                    paddingLeft: "5px"
                }}>
                 <Typography>Help & Support</Typography>
                 <Typography>Tearms & Conditions</Typography>
                 <Typography>Privacy Policy</Typography>
                 <Typography>Help</Typography>
                </Box>
            </Box>

        </>
    )
};