/*
step 1: npm install react-router-dom
step 2: const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]); in app.js

step 3:  <RouterProvider router={router} /> inside return div

step 4: set some routes

*/

// import { Router } from "react-router-dom"


/*

For common header or navbar in every component

1. Create a layout folder outside components
2. Create a js file names main or whatever relevant
3. add header component there and outlet component from react dom there

*/

/*
Nested routes
Etar mane hocche sobgulo component e kichu common jinish. seta hote pare kono ekta component or navbar or header whatever.
app.js e jei router create kora hoyeche setar moddhe children property add korte hbe

{path: "/",element: <Main></Main>, children:[Objects of other routes with elements property]

jei route ke nested e rakhbo na children [] er vitor setay manually header component add kore dite hbe
*/


/*
Set a dynamic router

<Link to= {`/products/${slug}`}>Details</Link> way 1

<Link to= {`/products/${slug}`}>
  <button>Details</button>
</Link>  way 2


way 3

const {brand,phone_name,slug} = props.product;

    const navigate = useNavigate()
    const clickHandler = ()=>{
        navigate(`/products/${slug}`);
    }

    <button onClick={clickHandler}>Details</button>

*/


// To mark or set style to active navigation item ->

// use NavLink component fomr react Router

// <NavLink className={({isActive})=> isActive ? 'active' : undefined} to = '/home'>Home</NavLink>

// ekta navlink er vitor classname dileo kaj kore sobgulay dileo kaj kore