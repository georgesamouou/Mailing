import React, { useState } from 'react';
import NavSide from './NavSide';
import banner from '../assets/cnpsBanner.png'

const MainContainer = () => {
    const [displayContent,setDisplayContent] = useState()
    console.log(displayContent)
    return (
        <div className='mainBox'>
            <NavSide displayContent={setDisplayContent}/>
            <div>
                Main Container
            </div>
        </div>
    );
}

export default MainContainer;
