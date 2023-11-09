import React from 'react';
import PropTypes from 'prop-types';

Banner.propTypes = {

};

function Banner(props) {
    return (
        <section class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="hero__categories">
                            <div class="hero__categories__all">
                                <i class="fa-solid fa-chevron-down"></i>
                                <span>Hoa tươi</span>
                            </div>
                            <ul class="list-unstyled">
                                <li><a href="/hoa-baby" class="nav-link">Hoa Baby</a></li>
                                <li><a href="/hoa-huong-duong" class="nav-link">Hoa hướng dương</a></li>
                                <li><a href="/hoa-lan-ho-diep" class="nav-link">Hoa Lan Hồ Điệp</a></li>
                                <li><a href="/hoa-tulip" class="nav-link">Hoa tulip</a></li>
                                <li><a href="/hoa-cuc-tana" class="nav-link">Hoa cúc Tana</a></li>
                                <li><a href="/hoa-thach-thao" class="nav-link">Hoa thạch thảo</a></li>
                                <li><a href="/hoa-hong" class="nav-link">Hoa hồng</a></li><li><a href="/hoa-mau-don" class="nav-link">Hoa mẫu đơn</a></li>
                                <li><a href="/cuc-mau-don" class="nav-link">Cúc mẫu đơn</a></li>
                                <li><a href="/hoa-cam-tu-cau" class="nav-link">Hoa cẩm tú cầu</a></li>
                                <li><a href="/hoa-ly" class="nav-link">Hoa ly</a></li>
                                <li><a href="/hoa-sen" class="nav-link">Hoa sen</a></li>
                                <li><a href="/hoa-dong-tien" class="nav-link">Hoa đồng tiền</a></li>
                                <li><a href="/hoa-cam-chuong" class="nav-link">Hoa cẩm chướng</a></li>
                                <li><a href="/hoa-cuc-hoa-mi" class="nav-link">Hoa cúc họa mi</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="hero__item set-bg" data-setbg="https://themewagon.github.io/ogani/img/hero/banner.jpg">
                            <div class="hero__text">
                                {/* <span>SHOP HOA HƯỚNG DƯƠNG</span> */}
                                <h2>SHOP HOA HƯỚNG DƯƠNG <br /></h2>
                                <p>Free Pickup and Delivery Available</p>
                                <a class="primary-btn">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;