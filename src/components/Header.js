
import React from 'react';

import styled from 'styled-components';
import NavbarBot from "./NavbarBot"
import NavbarTop from "./NavbarTop"

const StyledHeader = styled.div`
.header{
    /* height: 400px; */
    background-color: yellow;
}
`


function Header() {
    return (
        <StyledHeader>
            <div className='header'>
                <NavbarTop />
                <NavbarBot />
            </div>
        </StyledHeader>
    );
}

export default Header;
