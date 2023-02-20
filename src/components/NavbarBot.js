
import React from 'react';

import styled from 'styled-components';

const StyledNavbarBot = styled.div`
    .navbar__bot{
        background: black;
        height: 80px;
        color: white;
    }
`;


function NavbarBot() {
    return (
        <StyledNavbarBot>

            <div className='navbar__bot'>
                <p>
                    NavbarBot
                </p>
            </div>
        </StyledNavbarBot>
    );
}

export default NavbarBot;
