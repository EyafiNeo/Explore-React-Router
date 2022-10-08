import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Main from './Layouts/Main';
import Products from './Components/Products/Products';
import Friends from './Components/Friends/Friends';
import ProductDetails from './Components/Product Details/ProductDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <Main></Main>, children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        {
          path: "/products",
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
          },
          element: <Products></Products>
        },
        {
          path: "/products/:productId",
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/phone/${params.productId}`);
          },
          element: <ProductDetails></ProductDetails>
        },
      ]
    },
    {
      path: "/friends", element: <Friends></Friends>
    },


    { path: "*", element: <div><h1>Kichu nai beta vagggg.....</h1></div> }


  ]);

  return (
    <div className="App">

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
