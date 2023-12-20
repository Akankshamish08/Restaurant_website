import "./App.css";
import NavBar from "./components/navigation/navigation";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/footer";
import {   BrowserRouter, Routes, Route  } from "react-router-dom";
import React, { useState } from "react";
import About from "./components/About/About";
import LogIn from "./utils/login";
import SignUp from "./utils/signup";
import RestaurantDetails from "./utils/RestaurantDeatils";
import userContext from "./utils/userContext";
import { CartProvider } from "./utils/cardContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },

//       {
//         path: "/about",
//         element: <About />,
//       },
//     ],
//   },
// ]);

function App() {
  const [userName]=useState("Akanksha");
  return (
    
      <>
      <Provider store = {appStore}>
       <userContext.Provider value={{loggedInUser:userName}}>
        <CartProvider >
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/restaurant/:id" element={<RestaurantDetails/>}/>

        
      </Routes>
      </BrowserRouter>
   
      <Footer />
      </CartProvider>
      </userContext.Provider>
    </Provider>
      </>
   
  );
}






export default App;
