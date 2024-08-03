const RestaurantCard = (props) => {
    const { resData } = props;
    const {name,receipe,rating,deliveryTime,price,image}=resData;
  
    // Destructure is good way to write
      // const{}=resData
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img className="food-img" src={image} alt="NE"></img>
        <h3>{name}</h3>
        <h4>{receipe}</h4>
        <h4>{rating}</h4>
        <h4>{deliveryTime}</h4>
        <h4>{price}</h4>
      </div>
    );
  };
  export default RestaurantCard