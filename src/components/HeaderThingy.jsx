import React from 'react';
import oliveBanner from '../assets/img/olive_banner.jpg';

const Header = () => {
    return (
        <section>
            {/* prime graffe sono un prop */}
            {/* seconde graffe sono un oggetto  */}

            <img className='banner' src={oliveBanner} alt="olio banner" />
            <h1 className='company-info'>
                Gocce di Sole
            </h1>
        </section>
    );
};

export default Header;