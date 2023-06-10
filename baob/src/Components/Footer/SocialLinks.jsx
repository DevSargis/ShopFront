import { Box } from "@mui/material";
import logo from "../../Images/Logo.jpg"
import Typography from "@mui/material/Typography";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useState } from 'react';
import "./FooterCss/FooterCss.css"

export const SocialLinks = () => {

    const [selectedIcon, setSelectedIcon] = useState('');

    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
    };

    return (
        <>
            <Box>
                <Box sx={{ display: "flex" }}>
                    <Box component="img" src={logo} width={26.67} height={23.33} />
                    <Typography className="socialLinksTitle">Chairy</Typography>
                </Box>
                <Typography className="socialLinksDescription">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                Cras egestas purus </Typography>
                <Box className = "socialLinksItems">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FacebookOutlinedIcon
                        fontSize="xs"
                        className={selectedIcon === 'facebook' ? "socialLinksFacebook":"socialLinksDefaultColor"}
                        onClick={() => handleIconClick('facebook')}
                    />
                    </a>
                    <TwitterIcon
                        fontSize="xs"
                        className={selectedIcon === 'twitter' ? "socialLinksTwitter":"socialLinksDefaultColor"}
                        onClick={() => handleIconClick('twitter')}
                    />
                    <InstagramIcon
                        fontSize="xs"
                        className={selectedIcon === 'instagram' ? "socialLinksInstagram":"socialLinksDefaultColor"}
                        onClick={() => handleIconClick('instagram')}
                    />
                    <PinterestIcon
                        fontSize="xs"
                        className={selectedIcon === 'pinterest' ? "socialLinksPinterest":"socialLinksDefaultColor"}
                        onClick={() => handleIconClick('pinterest')}
                    />
                    <YouTubeIcon
                        fontSize="xs"
                        className={selectedIcon === 'youtube' ? "socialLinksYoutube":"socialLinksDefaultColor"}
                        onClick={() => handleIconClick('youtube')}
                    />
                </Box>
            </Box>

        </>
    )
};