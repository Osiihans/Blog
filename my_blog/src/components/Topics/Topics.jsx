import React from 'react'
import travelimg from '../../assets/travel15.webp';
import healthimg from '../../assets/health55.jpg';
import creativeimg from '../../assets/creative6.jpg';
const Topics = ({ travel, health, creative }) => {
    return (
        <>

            <h2 class="center-text">Topics</h2>
      
                <div class="topics">
                    <div class="image-container">
                        <img src={travelimg} alt="travel Image" />
                        <div class="overlay-text">
                            <a href="pages/travel-adventures.html">Travel</a>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src={healthimg} alt="Health Image" />
                        <div class="overlay-text">
                            <a href="pages/staying-fit.html">Health</a>
                        </div>
                    </div>

                    <div class="image-container">
                        <img src={creativeimg} alt="creative Image" />
                        <div class="overlay-text">
                            <a href="pages/creative-hobbies.html">Creatives</a>
                        </div>
                    </div>
                </div>
      


        </>
    )
}

export default Topics