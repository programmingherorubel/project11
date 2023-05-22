import { createBrowserRouter } from "react-router-dom";
import AddAToys from "./Dashbord/AddAToys";
import AllToys from "./Dashbord/AllToys";
import EditMyToys from "./Dashbord/EditMyToys";
import MyToys from "./Dashbord/MyToys";
import Blogs from "./Pages/Blogs";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Reg from "./Pages/Reg";
import ViewDetail from "./Pages/ViewDetail";
import Error from "./components/Error";
import Layout from "./components/Layout";
import PrivateRoute from "./provider/PrivateRoute";


const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Home/>,
            errorElement:<Error/>,
            children:[
                {
                    path:'/',
                    element:<Layout/>
                },
                {
                    path:'/addtoys',
                    element:<PrivateRoute><AddAToys /></PrivateRoute>
                },
                {
                    path:'/addtoys/:id',
                    element:<PrivateRoute><ViewDetail /></PrivateRoute>,
                    loader:({params})=> fetch(`https://project11-eight.vercel.app/addtoys/${params.id}`)
                },
                {
                    path:'/mytoys',
                    element:<PrivateRoute><MyToys /></PrivateRoute>
                },
                {
                    path:'/alltoys',
                    element:<AllToys />
                },
                {
                    path:'/edit/:id',
                    element: <PrivateRoute><EditMyToys /></PrivateRoute>,
                    loader:({params})=> fetch(`https://project11-eight.vercel.app/addtoys/${params.id}`)
                },
                {
                    path:'/blogs',
                    element: <Blogs/>,
                },
                {
                    path:'/login',
                    element:<Login />,
                },
                {
                    path:'/reg',
                    element:<Reg/>
                }
            ]
        }
    ]
)

export default router 