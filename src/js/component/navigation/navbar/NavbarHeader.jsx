import React from 'react';
import {Navbar} from 'react-bootstrap';
import {elementType} from 'react-prop-types';

const propTypes = {
    componentClass: elementType
};

const defaultProps = {
    componentClass: Navbar.Header
};

const NavbarHeader = ({componentClass: Component, ...props}) => (
    <Component
        {...props} />
);

NavbarHeader.propTypes = propTypes;
NavbarHeader.defaultProps = defaultProps;

export default NavbarHeader;