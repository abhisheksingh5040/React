import React from "react";
import ReactDOM from "react-dom";

/**
 * 
 * Header
 * - Logo
 * - Nav Items
 * Body
 * -Search
 * -RestaurantContainer
 *   -RestaurantCard
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo"> 
            {/* <img src="https://c8.alamy.com/comp/2C3RP2B/fast-food-logo-idea-burgerhotdog-baguettes-logo-inspiration-2C3RP2B.jpg"/> */}
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleColor = {
    backgroundColor: "#f0f0f0",
}

const RestaurantCard = () => {
    return (
        <div className="res-card" style={styleColor}>
            <img alt="resturant logo" className="res-card-logo"
             src="https://b.zmtcdn.com/data/pictures/1/50691/92d9b4053ef0965120828b4fa4eecc3b.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"/>
            <h3>Meghana Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.4 ratings</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
        </div>
    )
}

//Top level Component
const AppLayout = () => {
     return (
        <div className="app">
           <Header/>
           <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>); 
