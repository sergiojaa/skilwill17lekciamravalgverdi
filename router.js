import MainPage from "./pages/MainPage";
import AboutPage from './pages/AboutPage'
import LinkLayout from "./pages/layuots/LinkLayout";
import HomePage from "./pages/layuots/HomePage";
import ParamPage from "./pages/layuots/ParamPage";
import ErrorPage from "./pages/layuots/ErrorPage";

const router = [
  
   
    {
        element: <LinkLayout/>,
        path: '/',
        children: [
            {
                element: <HomePage/>,
                index: true
                },
             {
            element: <MainPage/>,
            path: '/main'
            },
            {
                element: <AboutPage/>,
                path: '/about'
            }, 
            
        ]
    },
    {
        element: <ParamPage/>,
        path: ':id'

    },
    {
        element: <ErrorPage/>,
        path: '*'
    }

]
export default router