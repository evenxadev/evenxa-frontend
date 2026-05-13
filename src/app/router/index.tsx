import { HomePage } from "../../pages/home";
import { EventsPage } from "../../pages/events";
import { EventDetailPage } from "../../pages/event-detail";
import { CheckoutPage } from "../../pages/checkout";
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

    if (pathname === routes.events) {
        return <EventsPage />;
    }

    if (pathname.startsWith(`${routes.eventDetailBase}/`) && pathname.endsWith("/comprar")) {
        const eventId = decodeURIComponent(
            pathname
                .replace(`${routes.eventDetailBase}/`, "")
                .replace(/\/comprar$/, ""),
        );

        return <CheckoutPage eventId={eventId} />;
    }

    if (pathname.startsWith(`${routes.eventDetailBase}/`)) {
        const eventId = decodeURIComponent(pathname.replace(`${routes.eventDetailBase}/`, ""));

        return <EventDetailPage eventId={eventId} />;
    }

    return <HomePage />;
}
