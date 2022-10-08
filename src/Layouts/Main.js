import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <p>This is common texts for all component</p>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Main;