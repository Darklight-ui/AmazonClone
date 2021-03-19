import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon" />


                <div className="home_row">
                    <Product 
                    id="000001"
                    title="The Lean startup"
                    price={1000} 
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                    rating={3}/> 

                    <Product 
                    id="000002"
                    title="iPhone 12"
                    price={99.9}
                    image="https://m.media-amazon.com/images/G/01/appcore/phone/AMZ_FamiyStripe_iPhone_12ProMax.png"
                    rating={5}
                    />
                    {/*Product */}
                </div>

                <div className="home_row">
                    <Product
                    id="000003"
                    title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
                    price={64.54}
                    image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg"
                    rating={4} />

                    <Product
                    id="28378292"
                    title="Moto G Power | 3-Day Battery1 | Unlocked | Made for US by Motorola | 4/64GB | 16MP Camera | 2020 | Black"
                    price={173}
                    image="https://images-na.ssl-images-amazon.com/images/I/81ZronJUUPL._AC_SL1500_.jpg"
                    rating={4} />
                    
                    <Product                     
                    id="000004"
                    title="CHUWI Herobook Pro 14.1 inch Windows 10 Intel N4000 Dual Core 8GB RAM 256GB ROM Notebook,Thin and Lightweight Laptop,BT4.0 (Herobook Pro(2020))"
                    price={299}
                    image="https://m.media-amazon.com/images/I/61jFd+G8sIL._AC_UY218_.jpg"
                    rating={5} />
                </div>

                <div className="home_row">
                    <Product                     
                    id="000003"
                    title="Roblox Gift Card - 800 Robux [Online Game Code]"
                    price={10}
                    image="https://images-na.ssl-images-amazon.com/images/I/71SfFWK2AUL._SY445_.jpg"
                    rating={3} 
                    />
                </div>


                <div className="home_row">
                    <Product                     
                    id="000003"
                    title="Roblox Gift Card - 800 Robux [Online Game Code]"
                    price={10}
                    image="https://images-na.ssl-images-amazon.com/images/I/71SfFWK2AUL._SY445_.jpg"
                    rating={3} 
                    />
                    <Product                     
                    id="000003"
                    title="Nautica Men's Soft Knit Sleep Lounge Pant"
                    price={39.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/71l-2Ux7CkL._AC_UX385_.jpg"
                    rating={4} 
                    />
                    <Product                     
                    id="000009"
                    title="Spalding NBA Replica Indoor/Outdoor Game Ball"
                    price={28.81}
                    image="https://m.media-amazon.com/images/I/A1RWcWjPdrL._AC_UL320_.jpg"
                    rating={4} 
                    />
                    <Product                     
                    id="000010"
                    title="Ultra Pro 5 (Five) Pack Lot of 100 Soft Sleeves/Penny Sleeve for Baseball Cards & Other Sports Cards"
                    price={8.97}
                    image="https://m.media-amazon.com/images/I/811XGkli9tL._AC_UL320_.jpg"
                    rating={5} 
                    />
                </div>



            </div>
        </div>
    )
} 

export default Home
