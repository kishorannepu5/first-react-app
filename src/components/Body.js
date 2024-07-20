import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

  
  const Body = () => {
    const [localResList,setLocalResList] = useState([]);
    const [filterResList, setFilterResList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchRestaurents()
    },[]);

    const fetchRestaurents = async()=>{
        const restaurants = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await restaurants.json();
        setLocalResList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilterResList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={ ()=>{
                const filterList = localResList.filter(value => value.info.avgRating === 4.5)
                setFilterResList(filterList)
            } }>Top Rated Restaurants</button>

            <input type="text" value={searchText} onChange={
                (e) =>{
                    setSearchText(e.target.value);
                }
            }/>
            <button onClick={()=> {
                const serachResult = localResList.filter(value => value?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilterResList(serachResult)
            }}>Search</button>
        </div>
        <div className="res-container">
          {filterResList.map((restaurant) => (
           <Link key={restaurant?.info?.id} to={'/restaurant/'+restaurant?.info?.id}>
            <RestaurantCard resData={restaurant} />
           </Link> 
          ))}
        </div>
      </div>
    );
  };

  export default Body;