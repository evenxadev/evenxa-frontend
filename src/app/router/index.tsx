import { HomePage } from "../../pages/home";
import { LoginPage } from "../../pages/login";
import { RegisterPage } from "../../pages/register";
import { routes } from "./routes";

export function AppRouter() {
    const pathname = window.location.pathname;

    if (pathname === routes.login) {
        return <LoginPage />;
    }

    if (pathname === routes.register) {
        return <RegisterPage />;
    }

    return <HomePage />;
}
