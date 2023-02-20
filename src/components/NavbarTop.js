
import React from 'react';

import styled from 'styled-components';

const StyledNavbarTop = styled.div`
    .navbar__top{
        height: 80px;
    }
        .navbar__top-text{
            p{
                height: 80px;
                margin:  24px 12px -24px 12px;
                font-weight: 500
            }
            .icon-down{
                margin: 30px 12px -28px -2px;
            }
            
        }
        .list-items{
            display: none;
            position : absolute;
            list-style: none;
            right: -92px;
             top: 52px;
             background: orange;
             padding: 12px;
            .list-item{
                text-align: left;
                font-weight: 400;
            }
            .list-item:hover{
                opacity: 0.8;
                background: black;
                color: white
            }
        }
        .sanpham:hover{
            cursor: pointer;
            .list-items{
            display: block;
            }
        }
`;


function NavbarTop() {
    return (
        <StyledNavbarTop className='navbar__top d-flex justify-content-between'>
            <div className="navbar__top-text d-flex" style={{ position: "relative" }}>
                <p >
                    Trang chủ
                </p>
                <div className='d-flex sanpham'>
                    <p>
                        Sản phẩm
                    </p>
                    <i class="fa-sharp fa-solid fa-caret-down icon-down" ></i>
                    <ul className="list-items">
                        <li className="list-item">Thú cưng</li>
                        <li className="list-item">Dịch dụ</li>
                        <li className="list-item">Thức ăn</li>
                        <li className="list-item">Cát vệ sinh</li>
                        <li className="list-item">Mỹ phẩm - chăm sóc</li>
                        <li className="list-item">Nhà-chuồng-nệm</li>
                        <li className="list-item">Balo-Thú vận chuyển</li>
                        <li className="list-item">Đồ chơi-phụ kiện</li>
                    </ul>
                </div>

            </div>
            <div className="navbar__top-text d-flex">
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
