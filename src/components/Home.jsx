//import React, {useEffect} from 'react'
import React from 'react'
import Product from './Product' 
//import jQuery from './jquery's
const Home = () => {

    /*
    useEffect(() => {
        //const $ = window.$;
        // set endpoint and your access key
    var ip = '134.201.250.155'
    var access_key = '00e1a9f6c6cd355bef0227f65e14ef8b';

    // get the API result via jQuery.ajax
    jQuery(function($) {
        $.ajax({
            url: 'https://api.ipstack.com/' + ip + '?access_key=' + access_key,
            dataType: 'jsonp',
            success: function(json) {
    
                alert(json);
    
            }
        });
    });
}, [])
*/
    return (
        <div>
            <p style={{padding: "80px",
      fontFamily: "Arial",fontSize: '25px'}}>
        Pricing for WorkFlowAI:
            Workflow AI is closer to you than you imagine !! Fix your
            price and pay monthly, you can fix any amount Enjoy all Workflow AI features 
            irrespective of what you pay
            </p>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/images/home/workflow121.JPG" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                        <div class="carousel-item">
                            <img src="/assets/images/home/workflow12.JPG" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <Product/>
                    </div>
                    )
}

export default Home;
