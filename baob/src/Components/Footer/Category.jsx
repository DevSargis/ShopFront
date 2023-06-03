import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./FooterCss/FooterCss.css"


export default function Category  (){
    return (
        <>
            <Box className = "listCategory">
                <Typography className="footerCategory">CATEGORY</Typography>
                <Box>
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