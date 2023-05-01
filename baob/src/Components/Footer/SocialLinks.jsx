import { Box } from "@mui/material";
import logo from "../../Images/Logo.svg"
import Typography from "@mui/material/Typography";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useState } from 'react';

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
                    <Typography sx={{
                        width: "50px",
                        height: "31px",
                        fontFamily: 'Inter',
                        fontStyle: "normal",
                        fontSize: "20px",
                        lineHeight: "25.2px",
                        paddingLeft: "5px"
                    }}>Chairy</Typography>
                </Box>
                <Typography sx={{
                    width:"200px",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "25.2px",
                    paddingLeft: "5px"
                }}>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                Cras egestas purus </Typography>
                <Box sx={{ display: 'flex', gap: '10px', paddingTop:"10px"}}>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FacebookOutlinedIcon
                        fontSize="xs"
                        style={selectedIcon === 'facebook' ? { color:'#3b5998', borderRadius:'50%', border: '1px solid #007580', padding: '2px'}:{color : 'black' }}
                        onClick={() => handleIconClick('facebook')}
                    />
                    </a>
                    <TwitterIcon
                        fontSize="xs"
                        style={selectedIcon === 'twitter' ? { color:'#00acee', borderRadius:'50%', border: '1px solid #007580', padding: '2px'}  :{color: 'black' }}
                        onClick={() => handleIconClick('twitter')}
                    />
                    <InstagramIcon
                        fontSize="xs"
                        style={ selectedIcon === 'instagram' ? {color: '#fa7e1e', borderRadius:'50%', border: '1px solid #007580', padding: '2px'} :{color:'black'} }
                        onClick={() => handleIconClick('instagram')}
                    />
                    <PinterestIcon
                        fontSize="xs"
                        style={selectedIcon === 'pinterest' ? { color:'red', borderRadius:'50%', border: '1px solid #007580', padding: '2px'} : {color : 'black' }}
                        onClick={() => handleIconClick('pinterest')}
                    />
                    <YouTubeIcon
                        fontSize="xs"
                        style={selectedIcon === 'youtube' ? { color: 'red', borderRadius:'50%', border: '1px solid #007580', padding: '2px'}: { color : 'black' }}
                        onClick={() => handleIconClick('youtube')}
                    />
                </Box>
            </Box>

        </>
    )
};