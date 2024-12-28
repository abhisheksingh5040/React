import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {

    // Local State Variable - Super powerful variable
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants,setFilteredListOfRestaurants] = useState([]);

    useEffect(() => {
        console.log("use effect called!");
        fetchData();
    },[]);

    const fetchData = async () =>{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await response.json();
        console.log(json?.data?.cards.length);
        setFilteredListOfRestaurants(json?.data?.cards.slice(3));
        setListOfRestaurants(json?.data?.cards.slice(3));
    }

    return (
        <div className="body">
        <div className="filter">
            <button className="filter-btn"
            onClick = {()=>{
                updatedListOfRestaurants = listOfRestaurants.filter(res=> res.card?.card?.info?.avgRating >= 4.2);
                setFilteredListOfRestaurants(updatedListOfRestaurants);
            }}
            >Top Rated Restaurant</button>
        </div>
        <div className="res-container">
            {
                filteredListOfRestaurants.map((restaurant) => {
                    return <RestaurantCard key = {restaurant?.card?.card?.info?.id} restData = {restaurant.card?.card?.info}/>;
                })
            }
        </div>
        </div>
    )
};

export default Body;