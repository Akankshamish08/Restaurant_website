import { Restaurant } from "../../utils/Restaurants";


const TopRatedRestaurant = (props) => {
    function getTopRestro(){
        const TopRatedRestaurant=Restaurant.filter((Restaurant) => Restaurant.rating > 4.2);
    
        props.TopRatedRestaurant(TopRatedRestaurant);
        console.log(TopRatedRestaurant);
       
    };



    return (
        <button className="button2"
      onClick={getTopRestro}
      >Top Rated Restaurant</button>
    )
}
export default TopRatedRestaurant;