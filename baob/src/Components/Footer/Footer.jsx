import { Box } from "@mui/material";
import { SocialLinks } from "./SocialLinks";
import  Category  from "./Category";
import Support from "./Support";
import Newsletter from "./Newsletter";


export const Footer = () => {
    return (
        <>
            <Box sx={{display:"flex", gap:"130px", padding: "0% 9%" }}>
                <SocialLinks />
                <Category />
                <Support/>
                <Newsletter/>
            </Box>
        </>
    )
};