import { NavLink } from "react-router-dom"


export const Nav = () => {
  return (
    <div>
        <NavLink>Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/blog" >Blog</NavLink>
        <NavLink>Contact</NavLink>
    </div>
  )
}
