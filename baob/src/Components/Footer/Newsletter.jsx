import { Box, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./FooterCss/FooterCss.css"


export default function Newsletter() {

    return (
        <>
            <Box >
                <Typography className="newsLetter">NEWSLETTER</Typography>
                <Box className = "newsLetterItems">
                    <TextField placeholder="Your email"
                        sx={{width: "200px"}}
                        inputProps={{style: {padding: "8px"}}}
                    />
                    <Button sx={{
                        backgroundColor: "#029FAE"
                    }} variant="contained">Suscribe</Button>
                </Box>
                <Typography className="newsLetterDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</Typography>
            </Box>
        </>
    )
};