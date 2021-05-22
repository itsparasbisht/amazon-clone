import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__row">
                <Product
                    id="1"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                    price="299"
                    image="https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"
                    rating={5}
                />
                <Product
                    id="2"
                    title="A Man Called Ove: The life-affirming bestseller that will brighten your day"
                    price="350"
                    image="https://images-na.ssl-images-amazon.com/images/I/916fuxlx90L.jpg"
                    rating={4}
                />
                
            </div>
            <div className="home__row">
                <Product
                    id="3"
                    title="New Apple iPhone 12 (128GB) - Black"
                    price="80,900"
                    image="https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg"
                    rating={4}
                />
                <Product
                    id="4"
                    title="Google Pixel 4a (Just Black, 6GB RAM, 128GB Storage)"
                    price="34,940"
                    image="https://images-na.ssl-images-amazon.com/images/I/7199N-Uz2AL._SL1500_.jpg"
                    rating={5}
                />
                <Product
                    id="5"
                    title="Samsung Galaxy S21 Ultra 5G (Phantom Black, 12GB, 256GB Storage) + Galaxy Buds Pro @990"
                    price="1,05,999"
                    image="https://images-na.ssl-images-amazon.com/images/I/917nPCOw9-L._SL1500_.jpg"
                    rating={4}
                />
                
            </div>
            <div className="home__row">
                <Product 
                    id="6"
                    title="New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Silver (Latest Model)"
                    price="83,000"
                    image="https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY218_.jpg"
                    rating={5}
                />
                <Product 
                    id="7"
                    title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Black)"
                    price="13,999"
                    image="https://m.media-amazon.com/images/I/61KIy6gX-CL._AC_UY218_.jpg"
                    rating={4}
                />
                <Product 
                    id="8"
                    title="Fire-Boltt Blast 1400 Over -Ear Bluetooth Wireless Headphones with 25H Playtime, Thumping Bass, Lightweight Foldable Compact Design with Google/Siri Voice Assistance"
                    price="27,249"
                    image="https://images-na.ssl-images-amazon.com/images/I/71lczMQC1bL._SL1178_.jpg"
                    rating={4}
                />
                    
            </div>

            <div className="home__row">
                <Product 
                    id="9"
                    title="Lenovo 60.4 cm (23.8-inch) FHD Ultra Slim Near Edgeless IPS Monitor with 75Hz, 4ms, HDMI, VGA, AMD FreeSync, Built in Speaker, with Metal Stand, LED Backlit, TUV Certified Eye Comfort - Q24i-10 "
                    price="9,999"
                    image="https://images-na.ssl-images-amazon.com/images/I/719Arg-0YFL._SL1500_.jpg"
                    rating={4}
                />
            </div>
        </div>
    )
}

export default Home
