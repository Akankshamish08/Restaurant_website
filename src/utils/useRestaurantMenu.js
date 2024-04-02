import { REST_MENU_API } from "./Constants";
import { useEffect , useState } from "react";

const useRestaurantMenu = (id)=>{
    const [menuData , setMenuData] = useState(null);
    const accessToken = localStorage.getItem("accessToken");
    // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODBiMjE1ZjZhODRkNjQxMjEyMTFlNSIsImlhdCI6MTcwMzE2NjY3NCwiZXhwIjoxNzAzMTcwMjc0fQ.9yvXDpvfvS5ydJf7GThNcZTjdas47RU-irLJkwEhz20';

    useEffect(()=>{
    fetchData();
},[]);

const fetchData = async () => {
    console.log("this is access token " + accessToken)
    const data = await fetch(REST_MENU_API + id, {
      headers: {
        Authorization: `JWT ${accessToken}`,
      },
    });
    
    const json = await data.json();
    setMenuData(json);
    console.log("json",json);
};
return menuData;
};
export default useRestaurantMenu;