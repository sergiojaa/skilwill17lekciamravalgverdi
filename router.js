import MainPage from "./pages/MainPage";
import AboutPage from './pages/AboutPage'
import LinkLayout from "./pages/layuots/LinkLayout";
import HomePage from "./pages/layuots/HomePage";

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
            }, ]
    }

]
export default router