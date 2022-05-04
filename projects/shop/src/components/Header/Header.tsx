import React from 'react';
import "./style.css"
import AuthShortElement from "../auth/AuthShorElement/AuthShortElement";
import {Link} from "react-router-dom";
import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography
} from "@mui/material";


/** Header component. */
const Header: React.FC = () => {
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                            <Button color="inherit" component={Link} to={"/"}>
                                MainPage
                            </Button>
                            <Button color="inherit" component={Link} to={"/product"} >
                                Shop
                            </Button>
                        </Typography>
                        <AuthShortElement />
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
};

export default Header;
