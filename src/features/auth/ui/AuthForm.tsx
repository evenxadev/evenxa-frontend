import styles from "./auth-form.module.css";
import type { FormEvent } from "react";

export type AuthMode = "login" | "register";

export type LoginFormValues = {
    email: string;
    password: string;
};

export type RegisterFormValues = LoginFormValues & {
    name: string;
    phone: string;
};

type Props =
    | {
        mode: "login";
        onSubmit: (values: LoginFormValues) => void;
    }
    | {
        mode: "register";
        onSubmit: (values: RegisterFormValues) => void;
    };

export function AuthForm(props: Props) {
    const isRegister = props.mode === "register";

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = String(formData.get("email") ?? "");
        const password = String(formData.get("password") ?? "");

        if (isRegister) {
            props.onSubmit({
                name: String(formData.get("name") ?? ""),
                phone: String(formData.get("phone") ?? ""),
                email,
                password,
            });
            return;
        }

        props.onSubmit({ email, password });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {isRegister && (
                <>
                    <label className={styles.field}>
                        <span>Nombre completo</span>
                        <input name="name" type="text" placeholder="Tu nombre" />
                    </label>

                    <label className={styles.field}>
                        <span>Telefono</span>
                        <input name="phone" type="tel" placeholder="442 000 0000" />
                    </label>
                </>
            )}

            <label className={styles.field}>
                <span>Correo electronico</span>
                <input name="email" type="email" placeholder="tu@email.com" />
            </label>

            <label className={styles.field}>
                <span>Contrasena</span>
                <input name="password" type="password" placeholder="Tu contrasena" />
            </label>

            <button className={styles.submit} type="submit">
                {isRegister ? "Crear cuenta" : "Iniciar sesion"}
            </button>
        </form>
    );
}
