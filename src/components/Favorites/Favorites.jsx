import { useSelector } from "react-redux"
import Card from "../card/Card"
import Cards from "../Cards/Cards"

const Favorites = () => {
    const myFavorites = useSelector((state) => state.myFavorites)

    return(
        <Cards characters={myFavorites}/>
    )
}

export default Favorites;