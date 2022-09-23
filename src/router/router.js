import News from '../components/pages/News'
import Top from '../components/pages/Top'
import Home from "../components/pages/Home";
export  const router = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/top',
        component: Top

    },
    {
        path:'/news',
        component: News
    },

]

