import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                />
        
                <div className="home__row">
                    <Product id="1" title="The Lean startUp" image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rate={400} rating={4}/>
                    <Product id="2" title="Analogue Men's Watch (Silver Colored Strap)" image="https://images-na.ssl-images-amazon.com/images/I/81nj6IlZpVL._UL1500_.jpg" rate={500} rating={3}/>
                </div>
                <div className="home__row">
                    <Product id="3" title="Mi Smart Band 5-1.1” AMOLED Color Display, 2 Weeks Battery Life, 5ATM Water Resistant" image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg" rate={1200} rating={4}/>
                    <Product id="4" title="JBL Xtreme 2 Portable Wireless Bluetooth Speaker (Green)" image="https://images-na.ssl-images-amazon.com/images/I/81-AJp2IX2L._SL1500_.jpg" rate={700} rating={5}/>
                    <Product id="5" title="JBL C115TWS True Wireless Headphone with Built-in Mic, 21 Hours Combined Playtime, Dual Connect and Bluetooth 5.0 (Mint)" image="https://images-na.ssl-images-amazon.com/images/I/61o7xcgF1oL._SL1500_.jpg" rate={1500} rating={4}/>
                </div>
                <div className="home__row">
                    <Product id="6" title="Fire-Boltt Blast 1200 On-Ear Bluetooth Headphones with Glow Lights, 20H Playtime, 1000mAh Battery and Shocking Bass and Built in Mic" image="https://images-na.ssl-images-amazon.com/images/I/71t8jBfzpwL._SL1500_.jpg" rate={1300} rating={4}/>
                </div>
            </div>   
        </div>
    )
}

export default Home
