import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss';
import { Header, Content, Banner, Footer } from '../../components';

Home.propTypes = {

};

function Home(props) {
    return (
        <div className="app-container">
            <Header />
            <Banner />
            <div className="content">
                <Content />
            </div>
            <Footer />
        </div>
    );
}

export default Home;