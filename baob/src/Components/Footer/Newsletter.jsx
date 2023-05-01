import { Box, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";


export default function Newsletter() {

    return (
        <>
            <Box >
                <Typography sx={{
                    color: "#9A9CAA",
                    letterSpacing: "0.06em",
                    height: "31px",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "25.2px",
                    paddingLeft: "5px"
                }}>NEWSLETTER</Typography>
                <Box sx={{
                    display: "flex",
                    fontSize: "10px",
                    position: "relative",
                    top: "5px",
                    background: "#FFFFFF",
                    borderRadius: "5px",
                    border: "1px #E1E3E5",
                    gap: "5px"
                }}>
                    <TextField
                        sx={{
                            width: "300px"
                        }}
                        placeholder="Your email"

                        inputProps={{
                            style: {
                                padding: "8px",
                            },
                        }}
                    />
                    <Button sx={{
                        backgroundColor: "#029FAE"
                    }} variant="contained">Suscribe</Button>
                </Box>
                <Typography sx={{
                    color: "#9A9CAA",
                    letterSpacing: "0.06em",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontSize: "14px",
                    width:"300px",
                    paddingTop:"10px"
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</Typography>
            </Box>

        </>
    )
};