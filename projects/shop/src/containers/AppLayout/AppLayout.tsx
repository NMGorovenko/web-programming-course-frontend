import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

type Props = {
    children?: React.ReactNode
};

const AppLayout: React.FC<Props> = props => {
    return (
        <>
            <Header />
            <main className="container main-container">{props.children}</main>
            <Footer />
        </>
    );
};

export default AppLayout;