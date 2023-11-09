import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Header-style/Header.scss';
import { Button, Input } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import path from '../utils/path';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUserRedux, handleLogoutRedux } from '../store/asyncActions';
import Swal from 'sweetalert2';
import { GiDeliveryDrone } from 'react-icons/gi';
import { PiSteeringWheelFill } from 'react-icons/pi';
import { MdPayments } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { BsCartFill } from 'react-icons/bs';
import './Header-style/Header.scss';


Header.propTypes = {

};

function Header(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user_id = useSelector((state) => state.user.id);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const userCurrent = useSelector((state) => state.user);

    useEffect(() => {
        //User Refresh
        if (!userCurrent.current && isLoggedIn && user_id) {
            dispatch(getCurrentUserRedux(user_id));
        }

        //Token Expired
        if (!isLoggedIn && !user_id) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Phiên làm việc đã hết hạn, hãy đăng nhập lại!',
                showConfirmButton: false,
                timer: 1500
            });
            navigate(`/${path.LOGIN}`);
        }

        return () => {
            if (!isLoggedIn) {
                navigate(`/${path.LOGIN}`);
            }
        }
    }, [isLoggedIn]);

    console.log('Current User Header >>> ', userCurrent);

    const handleUserLogout = () => {
        dispatch(handleLogoutRedux());
    }

    return (
        <div className="header">
            <div class="humberger__menu__wrapper">
                <div class="humberger__menu__logo">
                    <a href="#"><img src="img/logo.png" alt="" /></a>
                </div>
                <div class="humberger__menu__widget">
                    <div class="header__top__right__language">
                        <img src="https://themewagon.github.io/ogani/img/language.png" alt="" />
                        <div>English</div>
                        <span class="arrow_carrot-down"></span>
                        <ul>
                            <li><a href="#">Spanis</a></li>
                            <li><a href="#">English</a></li>
                        </ul>
                    </div>
                    <div class="header__top__right__auth">
                        <a href="#"><i class="fa fa-user"></i> Login</a>
                    </div>
                </div>
                <nav class="humberger__menu__nav mobile-menu">
                    <ul>
                        <li class="active"><a href="./index.html">Home</a></li>
                        <li><a href="./shop-grid.html">Shop</a></li>
                        <li><a href="#">Pages</a>
                            <ul class="header__menu__dropdown">
                                <li><a href="./shop-details.html">Shop Details</a></li>
                                <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                <li><a href="./checkout.html">Check Out</a></li>
                                <li><a href="./blog-details.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li><a href="./blog.html">Blog</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
                <div class="header__top__right__social">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>
                <div class="humberger__menu__contact">
                    <ul>
                        <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
                    </ul>
                </div>
            </div>
            {/* <!-- Humberger End -->

      <!-- Header Section Begin --> */}
            <header class="header header--shadow">
                <div class="header__top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="header__top__left">
                                    <ul>
                                        <li><i class="fa fa-envelope"></i> hello@{userCurrent && userCurrent?.current && `${userCurrent.current.firstname} ${userCurrent.current.lastname}`}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="header__top__right">
                                    <div class="header__top__right__social">
                                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                                        <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                                    </div>
                                    <div class="header__top__right__language">
                                        <img src="https://themewagon.github.io/ogani/img/language.png" alt="" />
                                        <div>English</div>
                                        <span class="arrow_carrot-down"></span>
                                        <ul>
                                            <li><a href="#">Tiếng Việt</a></li>
                                            <li><a href="#">English</a></li>
                                        </ul>
                                    </div>
                                    <div class="header__top__right__auth">
                                        <span><i class="fa fa-user"></i> &nbsp; Login</span>
                                        <ul class="header__top__right__auth__submenu">
                                            <hr />
                                            <li class="header__top__right__auth__submenu-item" onClick={() => navigate(`/${path.LOGIN}`)}>Đăng nhập</li>
                                            <li class="header__top__right__auth__submenu-item" onClick={() => navigate(`/${path.REGISTER}`)}>Đăng ký</li>
                                            {
                                                userCurrent && userCurrent?.current?.role == 'admin' && <li class="header__top__right__auth__submenu-item" onClick={() => navigate(`/${path.PRIVATE}`)}>Trang ADMIN</li>
                                            }
                                            <li class="header__top__right__auth__submenu-item" style={{ color: 'red' }} onClick={() => handleUserLogout()}>Đăng xuất</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="header__logo" onClick={() => navigate(`/${path.HOME}`)} style={{ cursor: 'pointer' }}></div>
                        </div>
                        <div class="col-lg-6">
                            <nav class="header__menu">
                                <ul>
                                    <li class="active"><Link to={`/${path.HOME}`}>TRANG CHỦ</Link></li>
                                    <li><a href="#">Chủ Đề</a>
                                        <ul class="header__menu__dropdown">
                                            <li><a href="/hoa-chuc-mung" class="nav-link">Hoa Chúc Mừng</a></li>
                                            <li><a href="/hoa-cuoi-cam-tay" class="nav-link">Hoa Cưới Cầm Tay</a></li>
                                            <li><a href="/hoa-tang-le" class="nav-link">Hoa tang lễ - Hoa Chia Buồn</a></li>
                                            <li><a href="/hoa-tinh-yeu" class="nav-link">Hoa tình yêu</a></li>
                                            <li><a href="/hoa-valentine" class="nav-link">Hoa Valentine</a></li>
                                            <li><a href="/hoa-ky-niem-ngay-cuoi" class="nav-link">Hoa Kỷ Niệm Ngày Cưới</a></li>
                                            <li><a href="/ngay-cua-me" class="nav-link">Ngày của mẹ</a></li>
                                            <li><a href="/hoa-chuc-mung-8-3" class="nav-link">Hoa Chúc Mừng 8-3</a></li>
                                            <li><a href="/hoa-chuc-mung-20-10" class="nav-link">Hoa Chúc Mừng 20-10</a></li>
                                            <li><a href="/hoa-chuc-mung-ngay-nha-giao-viet-nam-20-11" class="nav-link">Ngày nhà giáo VN</a></li>
                                            <li><a href="/le-giang-sinh" class="nav-link">Giáng sinh</a></li>
                                            <li><a href="/tet-am-lich" class="nav-link">Tết âm lịch</a></li>
                                            <li><a href="/hoa-tang-tot-nghiep" class="nav-link">Hoa Tốt Nghiệp</a></li>
                                            <li><a href="/hoa-dinh-ky" class="nav-link">Hoa Định Kỳ</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./blog.html">Thiết kế</a>
                                        <ul class="header__menu__dropdown">
                                            <li><a href="/bo-hoa" class="nav-link">Bó hoa</a></li>
                                            <li><a href="/lang-hoa" class="nav-link">Lẵng hoa</a></li>
                                            <li><a href="/gio-hoa-dep" class="nav-link">Giỏ Hoa</a></li>
                                            <li><a href="/ke-hoa-khai-truong" class="nav-link">Kệ hoa</a></li>
                                            <li><a href="/binh-hoa" class="nav-link">Bình hoa</a></li>
                                            <li><a href="/hop-hoa" class="nav-link">Hộp hoa</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./contact.html">Liên hệ</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-lg-3">
                            <div class="header__cart">
                                <ul>
                                    {/* <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li> */}
                                    <li><a onClick={() => navigate(`/${path.CART}`)} style={{ cursor: 'pointer' }}>
                                        <i class="fa fa-shopping-bag"></i>
                                        <span>{userCurrent && userCurrent?.current && `${userCurrent.current?.cart.length}`}</span>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="humberger__open">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>
            </header>
            {/* <!-- Header Section End -->

      <!-- Hero Section Begin --> */}
        </div>
    );
}

export default Header;