import { useDispatch, useSelector } from "react-redux"
import { filterCards, orderCards } from "../../redux/actions"
import Cards from "../Cards/Cards"
import { useState } from "react"


const Favorites = () => {
    const myFavorites = useSelector((state) => state.myFavorites)
    const dispatch = useDispatch()

    const [aux, setAux] = useState(false)

        const handleOrder = (e) => {
            dispatch(orderCards(e.target.value))
            setAux(!aux)
        }

        const handleFilter  = (e) => {
            dispatch(filterCards(e.target.value))
        }
    return(
        <div>

            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Todos">Todos</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="unknow">Unknow</option>
                <option value="Genderless">Genderless</option>
            </select>
            <Cards characters={myFavorites}/>
        </div>
    )
}

export default Favorites;