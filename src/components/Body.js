import RestaurantCard from "./RestaurantCard";
import resList  from "../utils/mockData"
import { useEffect, useState } from "react";


  
  const Body = () => {
    const [localResList,setLocalResList] = useState(resList);
    const [filterResList, setFilterResList] = useState(resList);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchRestaurents()
    },[]);

    const fetchRestaurents = async()=>{
        const restaurants = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await restaurants.json();
        console.log(json)
    }
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={ ()=>{
                const filterList = localResList.filter(rest => rest.data.avgRating > 4)
                console.log(filterList[0])
                setLocalResList(filterList)
            } }>Top Rated Restaurants</button>

            <input type="text" value={searchText} onChange={
                (e) =>{
                    setSearchText(e.target.value);
                }
            }/>
            <button onClick={()=> {
                const serachResult = localResList.filter(value => value.data.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilterResList(serachResult)
            }}>Search</button>
        </div>
        <div className="res-container">
          {filterResList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;