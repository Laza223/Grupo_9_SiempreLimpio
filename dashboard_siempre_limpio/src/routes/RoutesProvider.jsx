import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from '../pages/Root'
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import EditProduct from '../pages/EditProduct'
import Users from "../pages/Users";
import Home from "../pages/Home"
import Cart from "../pages/Cart";



const router = createBrowserRouter([
    {
        path: "/admin",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "products/edit/:id",
                element: <EditProduct />
            },
            {
                path: "users",
                element: <Users />
            },
            {
                // path: "/", colocar direccion de ruta (parte de "/")
                // element: </> colocar componente a enviar a <Outlet/>
            },
            {
                //    path: "/", colocar direccion de ruta (parte de "/")
                //     element: </> colocar componente a enviar a <Outlet/>
            }
        ],
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/carrito",
        element: <Cart />,
    }

])

export const Router_Provider = () => <RouterProvider router={router}/>