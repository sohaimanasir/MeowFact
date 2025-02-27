

import { useState } from 'react';
import './Body.css'

function FactSection(){
    const [fact , setFact]= useState('');
    const getCatFact = async()=>{
        const response = await fetch('https://catfact.ninja/fact')
        const data = await response.json()
        setFact(data?.fact)
    }

    // getCatFact()
    return(
    <>
    <div className="catfact-section">
        <div className="fact-header">
            <img src='/src/assets/MeowFact-Photoroom.png' alt="MeowFactLogo" />
            <h1>Unleashing Pawsome Facts, One Meow at a Time! 🐾😺</h1>
        
        </div>
            <div className="facts-card">
                {fact}🐾
            </div>
            <button onClick={getCatFact} className="facts-btn">Meow Me a Fact😼</button>
    </div>
    </>
    );
}
export default FactSection;