import { NavLink } from "react-router-dom"
import './Navigation.css'
export const Navigation = () => {
    return(
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/learned">LearnedWords</NavLink>
            </ul>
        </nav>
    )
}