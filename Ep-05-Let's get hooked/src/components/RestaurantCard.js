import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const { restData } = props;

    const {
        cloudinaryImageId,
        name,
        areaName,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
  } = restData?.info;

    return (
        <div className="res-card" style= {{ backgroundColor: "#f0f0f0"}} >
            <img alt={`${name} logo`} className="res-card-logo"
             src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ratings</h4>
            <h4>{deliveryTime / 100} minutes</h4>
        </div>
    )
};

export default RestaurantCard;