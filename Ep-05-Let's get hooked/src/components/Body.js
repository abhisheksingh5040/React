import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    //normal javascript variable
    let listOfRestaurantsJS = [];

    // Local State Variable - Super powerful variable
    const [listOfRestaurants,setListOfRestaurants] = useState(restaurantList);

    return (
        <div className="body">
        <div className="filter">
            <button className="filter-btn"
            onClick = {()=>{
                const filteredListOfRestaurants = listOfRestaurants.filter(res=> res.info.avgRating >= 4.5);
                setListOfRestaurants(filteredListOfRestaurants);
            }}
            >Top Rated Restaurant</button>
        </div>
        <div className="res-container">
            {
                listOfRestaurants.map((restaurant) => {
                    return <RestaurantCard key = {restaurant.info.id} restData = {restaurant}/>;
                })
            }
        </div>
        </div>
    )
};

export default Body;