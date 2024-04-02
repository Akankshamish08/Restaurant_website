import React from "react";
import "../navigation.css";
import { useOnline } from "../../utils/online"; 
import  { NavLink}  from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext , useState } from "react";
import { CartContext } from "../../utils/cardContext";
import LogIn from "../../utils/login";
import userContext from "../../utils/userContext"
const NavBar =() => {
   const onlineStatus= useOnline();
   const cartItems = useSelector((store) => store.cart.items);
  const currentUser = useContext(userContext);
  const { cart } = useContext(CartContext);
  console.log("cart", cart);

  console.log("logged", currentUser);

  const [visible, setVisible] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };
  const setLoggedIn = (val) => {
    setIsLoggedIn(val);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("accessToken");
  };
    return (
      <>
        <div className="navbar">
      <img className="logo" src="https://www.logolynx.com/images/logolynx/2f/2fe83a33c4d0888fbb9476d0deda5710.png" alt="logo"/>
     <ul>
       <li><NavLink  style={{textDecoration:'none'}} to ={"/"}>Home</NavLink></li>
       <li><NavLink  style={{textDecoration:'none'}} to ={"/about"}>About Us</NavLink></li>
      <li><NavLink  style={{textDecoration:'none'}} to ={"/cart"} >Cart - {cart.length} items</NavLink></li>
      {/* <li>{isLoggedIn ? (<button onClick = {handleLogout}>Logout</button>
      ):(
        <button type="button" onClick={openModal}>Login</button>)}</li></ul>
        <LogIn isVisible = {visible}
        onClose = {closeModal} 
        setIsLoggedIn={setIsLoggedIn}/> */}
      {/* <li><NavLink  style={{textDecoration:'none'}} to ={"/signup"} > SignUp</NavLink></li> */}
      {/* <li> {onlineStatus ? "🟢" : "🔴"}</li> */}
      <li>
            {isLoggedIn ? (
              <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
               onClick={handleLogout}>Logout</button>
            ) : (
              <button
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={openModal}
              >
                Login
              </button>
            )}
          </li>
          {/* <li className="px-4">{loggedInUser}</li> */}
        </ul>
      </div>
      <LogIn
        isVisible={visible}
        onClose={closeModal}
        setLoggedIn={setLoggedIn} 
        />
        </>
     );
     };
   

    

 export default NavBar;