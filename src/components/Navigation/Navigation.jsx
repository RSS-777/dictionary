import { NavLink } from "react-router-dom"
import './Navigation.css'
export const Navigation = () => {
    const resetWords = () => {
        localStorage.removeItem('selectedWords')
    }

    return(
        <nav className="navigation">
            <ul>
                <NavLink to="/">Dictionary</NavLink>
                <button onClick={resetWords}>Reset</button>
                <NavLink to="/learned">LearnedWords</NavLink>
            </ul>
        </nav>
    )
}