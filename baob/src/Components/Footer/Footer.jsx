import { Box } from "@mui/material";
import { SocialLinks } from "./SocialLinks";
import  Category  from "./Category";
import Support from "./Support";
import Newsletter from "./Newsletter";
import "./FooterCss/FooterCss.css"

export const Footer = () => {
    return (
        <>
            <Box className = "generalFooter">
                <SocialLinks />
                <Category />
                <Support/>
                <Newsletter/>
            </Box>
        </>
    )
};