import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Content-style/style.css';
import { getAllProductApi } from '../services/product';
import { useNavigate } from 'react-router-dom';
import { formatter } from '../utils/helper';

Content.propTypes = {

};

function Content(props) {
    const navigate = useNavigate();
    const [listProduct, setListProduct] = useState({});

    useEffect(() => {
        getAllProduct();
    }, []);

    const getAllProduct = async (page = 1) => {
        let response = await getAllProductApi(page);
        if (response && response.success) {
            const { success, total, page, product } = response;
            console.log('product >>> ', product);
            setListProduct(product);
        }
    }
    console.log('check all products >>> ', listProduct);

    const handleAccessDetail = (pid) => {
        console.log('pid >>> ', pid);
        navigate(`/products/${pid}`);
    }

    return (
        <Fragment>
            <section class="featured spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>Tất cả sản phẩm</h2>
                            </div>
                            <div class="featured__controls">
                                <ul>
                                    <li class="active" data-filter="*">TẤT CẢ</li>
                                    <li data-filter=".oranges">ĐANG GIẢM GIÁ</li>
                                    <li data-filter=".fresh-meat">ĐẶT NHIỀU NHẤT</li>
                                    <li data-filter=".vegetables">SẢN PHẨM MỚI</li>
                                    <li data-filter=".fastfood">HOA SINH NHẬT</li>
                                    <li data-filter=".fastfood">HOA KHAI TRƯƠNG</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row featured__filter">
                        {
                            listProduct && listProduct?.length > 0 && listProduct?.map((item) => {
                                return (
                                    <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                        <div class="featured__item">
                                            {
                                                item?.image?.length == 0 ? (<div class="featured__item__pic set-bg" style={{ backgroundImage: 'url("https://leafyflower.com/uploads/images/san-pham/top-hoa-ban-chay/bo-hoa-hong-tinh-yeu.jpg")' }}>
                                                    <ul class="featured__item__pic__hover">
                                                        <li><a><i class="fa fa-heart"></i></a></li>
                                                        <li><a><i class="fa fa-retweet"></i></a></li>
                                                        <li><a><i class="fa fa-shopping-cart" onClick={() => handleAccessDetail(item._id)} style={{ cursor: 'pointer' }}></i></a></li>
                                                    </ul>
                                                </div>) : (<div class="featured__item__pic set-bg" style={{ backgroundImage: `url(${item?.image[0]})` }}>
                                                    <ul class="featured__item__pic__hover">
                                                        <li><a><i class="fa fa-heart"></i></a></li>
                                                        <li><a><i class="fa fa-retweet"></i></a></li>
                                                        <li><a><i class="fa fa-shopping-cart" onClick={() => handleAccessDetail(item._id)} style={{ cursor: 'pointer' }}></i></a></li>
                                                    </ul>
                                                </div>)
                                            }
                                            <div class="featured__item__text" style={{ cursor: 'pointer' }}>
                                                <h3><span onClick={() => handleAccessDetail(item._id)}>{item.title}</span></h3>
                                                <h5>{formatter.format(item.price)}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div >
            </section >

            {/* < section class="latest-product spad" >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="latest-product__text">
                                <h4>Latest Products</h4>
                                <div class="latest-product__slider owl-carousel">
                                    <div class="latest-prdouct__slider__item">
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-1.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-2.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-3.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="latest-prdouct__slider__item">
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-1.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-2.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-3.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="latest-product__text">
                                <h4>Top Rated Products</h4>
                                <div class="latest-product__slider owl-carousel">
                                    <div class="latest-prdouct__slider__item">
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-1.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-2.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-3.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="latest-prdouct__slider__item">
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-1.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-2.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-3.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="latest-product__text">
                                <h4>Review Products</h4>
                                <div class="latest-product__slider owl-carousel">
                                    <div class="latest-prdouct__slider__item">
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-1.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-2.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-3.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="latest-prdouct__slider__item">
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-1.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-2.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="https://themewagon.github.io/ogani/img/latest-product/lp-3.jpg" alt="" />
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h4>Crab Pool Security</h4>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section > */}
        </Fragment>
    );
}

export default Content;