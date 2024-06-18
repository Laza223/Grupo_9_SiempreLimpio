import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from '../pages/Root'
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import EditProduct from '../pages/EditProduct'

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Dashboard/>
            },
            {
                path: "products",
                element: <Products/>
            },
            {
                path: "products/edit/:id",
                element: <EditProduct/> 
            },
            {
               /*  path:"api/usuarios/:id",
                element: <viewUser/> */
            },
            {
               // path: "/", colocar direccion de ruta (parte de "/")
                // element: </> colocar componente a enviar a <Outlet/>
            },
            {
            //    path: "/", colocar direccion de ruta (parte de "/")
            //     element: </> colocar componente a enviar a <Outlet/>
            }
        ]
    }
])

export const Router_Provider = () => <RouterProvider router={router}/>;