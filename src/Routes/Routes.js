import ErrorComponent from "../components/ErrorComponent/ErrorComponent";
import HomePage from "../components/HomePage/HomePage";
import { loadMovies } from "../helpers/loadMovies";
const Routes = [
    {
        loadData: loadMovies,
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        loadData: loadMovies,
        path: '/search/:searchTerm',
        component: HomePage,
        exact: true
    },
    {
        loadData: loadMovies,
        path: '/search',
        component: HomePage,
        exact: true
    },
    {
        path: '/error',
        component: ErrorComponent
    }
]
export default Routes;
