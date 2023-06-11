import React from 'react';
import Alert from '@mui/material/Alert';
import { Snackbar } from '@material-ui/core';
import { useState, useEffect } from 'react';
import Slide from '@material-ui/core/Slide';
import { Box } from "@mui/material";

const TransitionUp = (props) => {
    return <Slide {...props} direction="down" />;
};
const status = {
    1: "error",
    2: "warning",
    3: "info",
    4: "success"
};
const AlertComponent = ({ message, infoStatus }) => {
    const [open, setOpen] = useState(true);
    const handleCloseAlert = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (infoStatus !== 0) {
            setOpen(true);
        }
    }, [infoStatus]);

    const severity = status[infoStatus] || 'info';
    if (infoStatus !== 0) {
        return (
            <Box>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleCloseAlert}
                    TransitionComponent={TransitionUp}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert severity={severity} onClose={handleCloseAlert}>
                        {message}
                    </Alert>
                </Snackbar>
            </Box>
        );
    }
};

export default AlertComponent;