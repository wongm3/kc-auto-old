import React from 'react';
import Navbar from '../navigation/navbar/Navbar';

const Header = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#"><i className="fa fa-fw fa-car" /> KC Auto</a>
            </Navbar.Brand>
        </Navbar.Header>
    </Navbar>
);

export default Header;