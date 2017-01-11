import React from 'react';
import {elementType} from 'react-prop-types';
import NavbarHeader from './NavbarHeader';
import NavbarBrand from './NavbarBrand';

const propTypes = {
    componentClass: elementType
};

const defaultProps = {
    componentClass: 'div'
};

const Navbar = ({componentClass: Component, ...props}) => (
    <Component
        {...props}
        className="navbar navbar-fixed-top"/>
);

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
Navbar.Header = NavbarHeader;
Navbar.Brand = NavbarBrand;

export default Navbar;
