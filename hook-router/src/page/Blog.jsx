import { useContext } from "react"
import { NewCreation } from "../App"
// import NewCreation from "./App"

export const Blog = () => {
    const user =useContext(NewCreation)
  return (
    <div><h1>Blog {user} </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ab quos error, pariatur ratione reiciendis vel, beatae at voluptates dolorem natus molestias amet fuga, nisi debitis earum esse totam quas.</p>
    </div>
  )
}
