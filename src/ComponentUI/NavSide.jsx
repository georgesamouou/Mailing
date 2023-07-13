import React from 'react';
import Accordions from './Accordion';

const NavSide = () => {
    return (
        <div className='MenuContainer'>
            <Accordions/>
            <div className='navFooter'>
                &copy; CNPS 2023
            </div>
        </div>
    );
}

export default NavSide;
