
import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import todoRouter from './todoRouter';
import DetailPage from "../pages/DetailPage";

const Loading = <div>Loading....</div>
const Main = lazy(() => import("../pages/MainPage"))
// const Main = lazy(() => import("../pages/todo/ListPage"))
const Search = lazy(() => import("../pages/SearchPage"))
const MapPage = lazy(() => import("../pages/MapPage"))
const GocampingIndex = lazy(() => import("../pages/todo/ListPage"))
const GocampingRead = lazy(() => import("../pages/todo/ReadPage"))


const root = createBrowserRouter([
    {
     path:"",
     element:<Suspense fallback={Loading}><Main /></Suspense>
    },
    {
        path: "gocamping",
        element: <Suspense fallback={Loading}><GocampingIndex /></Suspense>,
        children:todoRouter()
        // ]
    },
    {
     path: "mappage",
     element: <Suspense fallback={Loading}><MapPage /></Suspense>,
     
     // children:[
     //     {
     //         path: "list",
     //         element: <Suspense fallback={Loading}><TodoList /></Suspense>
     //     }
     // ]
    },

    {
        path: "read/:tno",
        element: <Suspense fallback={Loading}><GocampingRead /></Suspense>
       },

    
    {
        path:"detail",
        element:<Suspense fallback={Loading}><DetailPage /></Suspense>   
       },  

])

export default root;
