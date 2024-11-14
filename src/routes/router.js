import { BookingPage } from "../pages/BookingPage/BookingPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import MainPage from "../pages/MainPage/MainPage"
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage"


export const privateRoutes = [
    {path: '/main', component: MainPage},
    {path: '/booking', component: BookingPage},
]

export const publicRoutes = [
    {path: '/registration', component: RegistrationPage},
    {path: '/login', component: LoginPage},
]