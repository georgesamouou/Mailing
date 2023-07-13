import React, { useState } from 'react';
import Navigation from '../ComponentUI/Navigation';
import MainContainer from '../ComponentUI/MainContainer';
import {BsGlobe} from 'react-icons/bs'
import{IoNewspaperOutline} from 'react-icons/io5'
import{AiOutlineBars} from 'react-icons/ai'
import Profil from "../ComponentUI/Profil"
import logo from "../assets/logoCnps.png"
const Main = () => {
    const [active,setActive] = useState(1)
    const [userStatus,setUserStatus] = useState("Charger D'exploitation")
    return (
        <div className='mainContainer'>
            <div className='NavigationContainer'>
                <div className="d_flex mt-2">
                   { /*<img src={logo} alt="Logo Cnps" className='logoCnps' />*/}
                    <Navigation setActive={setActive} active={`${active==1?"active":""}`} text={userStatus}/>
                    
                </div>
                 <div className='IconContainer mt-2 '>
                    <span className='profil_name'>Profil</span>
                    <Profil/>
                </div>
            </div>
            
            <MainContainer/>
        </div>
    );
}

export default Main;
