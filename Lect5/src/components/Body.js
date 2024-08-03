import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
  // Local State Variable---- SuperPowerful Variable
  const [listofRes,setlistofRes] = useState(restaurantList)

    // const arr=useState();
    // array Destructring
    // const restaurantList=arr[0];
    //const setrestaurantlist=arr[1];
    // const [restaurantList,setrestaurantlist]=arr
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
            
            const filteredList = listofRes.filter((res) => parseFloat(res.rating) > 4.4);

            setlistofRes(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
         </button>
      </div>
      <div className="res-container">
        {listofRes.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
