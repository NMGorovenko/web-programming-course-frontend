import React from 'react';
import "./style.css"
import AuthShortElement from "../auth/AuthShorElement/AuthShortElement";

const Header: React.FC = () => {
    return (
        <header>
            <AuthShortElement />
        </header>
    );
};

export default Header;