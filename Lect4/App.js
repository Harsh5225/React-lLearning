import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.nicepng.com/png/detail/299-2993275_food-order-icon-food-order-logo.png"
        ></img>
      </div>
      <div className="Nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// RestaurantList is JSON Data for displaying cards
const restaurantList = [
  {
    id: "1001",
    name: "Santosh Family Dhaba",
    receipe: "Tomato Soup",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "22 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mkcibe6x1ychvzjkywxk",
  },
  {
    id: "1002",
    name: "Cafe Niloufer",
    receipe: "Maska Bun",
    rating: "4.5",
    price: "₹400 for two",
    deliveryTime: "32 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dc9t0kiq7lhsd3pndohf",
  },
  {
    id: "1003",
    name: "Santosh Family Dhaba",
    receipe: "Crispy Corn",
    rating: "4.5",
    price: "₹560 for two",
    deliveryTime: "32 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dwqb8nhiop8fvqya0alq",
  },
  {
    id: "1004",
    name: "Grameen Kulfi",
    receipe: "Sitaphal Stick Kulfi",
    rating: "4.6",
    price: "₹120 for two",
    deliveryTime: "18 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vu0thsifji9wgfuzfmic",
  },
  {
    id: "1005",
    name: "Subbayya Gari Hotel",
    receipe: "Butta Bojanam",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "24 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwtocxqjtu57vc7l52h9",
  },
  {
    id: "1006",
    name: "Utsav Vegetarian",
    receipe: "Kaju Paneer Biryani",
    rating: "4.1",
    price: "₹300 for two",
    deliveryTime: "32 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/y2lkcxxax3794vepe2se",
  },
  {
    id: "1007",
    name: "Subbayya Gari Hotel",
    receipe: "Butta Bojanam",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "24 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwtocxqjtu57vc7l52h9",
  },
  {
    id: "1008",
    name: "Subbayya Gari Hotel",
    receipe: "Butta Bojanam",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "24 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwtocxqjtu57vc7l52h9",
  },
  {
    id: "1009",
    name: "Subbayya Gari Hotel",
    receipe: "Butta Bojanam",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "24 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwtocxqjtu57vc7l52h9",
  },
  {
    id: "1010",
    name: "Subbayya Gari Hotel",
    receipe: "Butta Bojanam",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "24 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwtocxqjtu57vc7l52h9",
  },
  {
    id: "1011",
    name: "Subbayya Gari Hotel",
    receipe: "Butta Bojanam",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "24 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwtocxqjtu57vc7l52h9",
  },
  {
    id: "1012 ",
    name: "Subbayya Gari Hotel",
    receipe: "Butta Bojanam",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "24 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwtocxqjtu57vc7l52h9",
  },
];

// destructuring js
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

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
       {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
