import MainPage from "../pages/MainPage/MainPage"
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage"


export const privateRoutes = [
    {path: '/main', component: MainPage},
]

export const publicRoutes = [
    {path: '/registration', component: RegistrationPage},
]