
import React from 'react';

import styled from 'styled-components';
import NavbarBot from "./NavbarBot"
import NavbarTop from "./NavbarTop"

const StyledHeader = styled.div`
.header{
    font-size: 21px;
}
`


function Header() {
    return (
        <StyledHeader>
            <div className='container header'>
                <NavbarTop />
                <NavbarBot />
            </div>
        </StyledHeader>
    );
}

export default Header;
