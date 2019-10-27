import React from 'react';
import PropTypes from "prop-types";

const Header = ({title}) => (
    <header>
        <h1 className="text-cender">{title}</h1>
    </header>
)

Header.prototype = {
    title: PropTypes.string.isRequired
}

export default Header;