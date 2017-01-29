import React from 'react';
import { Navbar } from 'react-bootstrap';
import { elementType } from 'react-prop-types';

const propTypes = {
  componentClass: elementType,
};

const defaultProps = {
  componentClass: Navbar.Brand,
};

const NavbarBrand = ({ componentClass: Component, ...props }) => (
  <Component {...props} />
);

NavbarBrand.propTypes = propTypes;
NavbarBrand.defaultProps = defaultProps;

export default NavbarBrand;
