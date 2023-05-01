import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";


export default function Category  (){

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
                }}>CATEGORY</Typography>
                <Box sx={{
                    color:"#272343",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontSize: "12px",
                    paddingLeft: "5px"
                }}>
                 <Typography>Sofa</Typography>
                 <Typography>Armchair</Typography>
                 <Typography>Wing Chair</Typography>
                 <Typography>Desk Chair</Typography>
                 <Typography>Wooden Chair</Typography>
                 <Typography>Park Bench</Typography>
                </Box>
            </Box>

        </>
    )
};