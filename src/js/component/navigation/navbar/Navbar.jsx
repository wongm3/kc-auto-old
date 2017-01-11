import React from 'react';
import {elementType} from 'react-prop-types';

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

export default Navbar;
