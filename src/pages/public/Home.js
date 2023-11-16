import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss';
import { Header, Content, Banner, Footer } from '../../components';
// import '../../css/styles.css';
// import '../../css/bootstrap.min.css';

Home.propTypes = {

};

function Home(props) {
    return (
        <div className="app-container">
            <Header />
            <div className="content">
                <Banner />
                <Content />
            </div>
            <Footer />
        </div>
    );
}

export default Home;