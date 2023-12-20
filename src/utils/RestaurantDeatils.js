
import "./RestaurantDetail.css"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import Shimmer from "./shimmer";
import {useDispatch} from  'react-redux';
// import userContext from "./userContext";
import { useContext } from "react";
import { CartContext } from "./cardContext";
const RestaurantDetails =()=>{
    const {id} = useParams();
    const { addToCart} = useContext(CartContext);
    const  menu_data= useRestaurantMenu(id);
    const dispatch = useDispatch();
   
    if(menu_data === null) 
    return
        <Shimmer/>;
        console.log("menu data" , menu_data);
        const itemsCards = menu_data[0]?.menuItems; 
    
        
     function handleAddItem(item){
        addToCart(item);
     }    
     return (
        <div className= "Cart1">
            <div className="menuList">
                {itemsCards.map((item) =>(
                    <div data_testid = "foodItems" 
                    key = {item._id} className="ids">
                         <div className="imagearea">
                            <div className="button">
                               <button className="btn-1" onClick = {()=>handleAddItem(item)}>Add +</button> 
                            </div>
                            <img src={item.image} className="foodimg"/>
                        </div>
                        <div className="item">
                            <div className="pricing">
                                <p className="foodName">{item.name}</p>
                                <span className="price"> ₹{item.price ? item.price : item.finalPrice} </span>

                            </div>
                            <p className="description">{item.description}</p>

                        </div>
                       
                    </div>
                ))}
            </div>
        </div> 
     )
}
export default RestaurantDetails;