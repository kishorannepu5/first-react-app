import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        loadRestaurantMenu();
    }, [])

    const loadRestaurantMenu =  async () =>{
        const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await data.json();
        setRestaurantInfo(json.data)
    }
    if (restaurantInfo === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[2]?.card?.card?.info;

    return (
     <div className="menu">
        <h1>{name}</h1>
        <p>
            {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
    )
}

export default RestaurantMenu;