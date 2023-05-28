import { Box } from "@mui/material";
import { SocialLinks } from "./SocialLinks";
import  Category  from "./Category";
import Support from "./Support";
import Newsletter from "./Newsletter";


export const Footer = () => {
    return (
        <>
            <Box sx={{display:"flex", gap:"16%", padding: "0% 0%" }}>
                <SocialLinks />
                <Category />
                <Support/>
                <Newsletter/>
            </Box>
        </>
    )
};