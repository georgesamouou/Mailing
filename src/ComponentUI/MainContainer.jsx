import React, { useState } from 'react';
import NavSide from './NavSide';
import banner from '../assets/cnpsBanner.png'
import Electriciens from '../Component/Electriciens';
import Enregistrements from '../Component/Enregistrements';
import Ordonances from '../Component/Ordonances';

const MainContainer = () => {
    const [displayContent,setDisplayContent] = useState("Enregistrement")
    const displayContainer = ()=>{
        if (displayContent=== "Enregistrement") {
            return(<Enregistrements/>)
        } else if (displayContent=== "Electriciens"){
            return(<Electriciens/>)
        }else if(displayContent=== "Ordonances et Plannification"){
            return (<Ordonances/>)
        }
    }
    return (
        <div className='mainBox'>
            <NavSide displayContent={setDisplayContent}/>
            <div>
                {displayContainer()}
            </div>
        </div>
    );
}

export default MainContainer;
