import React from 'react';
import Accordions from './Accordion';

const NavSide = ({displayContent}) => {
    return (
        <div className='MenuContainer'>
            <Accordions displayContent={displayContent}/>
            <div className='navFooter'>
                Amou'ou Georges Junior &copy; 2023
            </div>
        </div>
    );
}

export default NavSide;
