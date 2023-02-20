
import React from 'react';

import styled from 'styled-components';

const StyledNavbarTop = styled.div`

`;


function NavbarTop() {
  return (
    <StyledNavbarTop className='navbar__top d-flex justify-content-between'>
      <div className="d-flex">
        <p>
          Trang chủ
        </p>
        <p>
          Sản phẩm
        </p>
      </div>
      <div className="d-flex">
        <p>
          Tin tức
        </p>
        <p>
          Giới thiệu
        </p>
        <p>
          Liên hệ
        </p>
      </div>

    </StyledNavbarTop>
  );
}

export default NavbarTop;
