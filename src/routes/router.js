import { BookingPage } from "../pages/BookingPage/BookingPage";
import CoworkingDetailPage from "../pages/CoworkingDetailPage/CoworkingDetailPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainPage from "../pages/MainPage/MainPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import ScannerPage from '../pages/ScannerPage/ScannerPage'

export const privateRoutes = [
    { path: "/main", component: MainPage },
    { path: "/booking", component: BookingPage },
    { path: "/detail", component: CoworkingDetailPage },
    { path: "/scanner", component: ScannerPage },
];

export const publicRoutes = [
    { path: "/registration", component: RegistrationPage },
    { path: "/login", component: LoginPage },
];
