import React from "react";
import "./Body.css";
import { useEffect,useState } from "react";
import { Restaurant } from "../../utils/Restaurants";
import TopRatedRestaurant from "../TopRatedRestaurant/topRated";
import Shimmer from "../../utils/shimmer";
import { useOnline } from "../../utils/online";
import { Link } from "react-router-dom";
import userContext from "../../utils/userContext";
const Body = () => {
  const [searchText, setSearchText] = useState(""); //this function returns an array
  const [filterRestro, setfilterRestaurant] = useState(Restaurant);
   useEffect(() => {
   console.log("useEffect");
              fetchData();
    },[]);
    async function fetchData(){

      const data = await fetch(
        "http://localhost:4567/api/restaurants"
      );

      const response = await data.json();
      setfilterRestaurant(response);
      // Restaurant(response);
    }

  function filteredData() {
    const filterData = Restaurant.filter((Restaurant) =>
      Restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filterData);

    setfilterRestaurant(filterData);
  }
  function filterTopRateRestro(Restaurant) {
    setfilterRestaurant(Restaurant);
  }
  const online = useOnline();
  if (!online) {
    return <h2>Please check your internet connection</h2>;
  }

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search for restaurant ,cuisineor a dish"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="button1" onClick={filteredData}>
        Search
      </button>
      <TopRatedRestaurant TopRatedRestaurant={filterTopRateRestro} />
      <h1>Restaurants List</h1>
      {filterTopRateRestro.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="Restaurants">
          {filterRestro.map((Restaurant) => (
            <Link to={`/restaurant/${Restaurant._id}`} className="link">
              <Card key={Restaurant._id} details={Restaurant} />
            </Link>
          ))}
          
        </div>
      )
     
      }
    </div>
  );
};
const Card = (props) => {
  //object destructuring
  const { image, name, cuisines, rating, cost } = props.details;
  return (
    <div className="restaurant-card">
      <img src={image} />
      <div className="restaurant-detail">
        <div>
          <h3>{name}</h3>
          <h4>{cuisines}</h4>
        </div>
        <div>
          <div className="rate">
            <h4>{rating}</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </div>
          <h5>{cost}</h5>
        </div>
      </div>
    </div>
  );
};

export default Body;
