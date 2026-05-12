import { AuthForm, type RegisterFormValues } from "../../features/auth/ui";
import { routes } from "../../app/router/routes";
import heroImage from "../../shared/assets/images/hero/hero.jpg";
import logo from "../../shared/assets/images/logo/logo-combinado.png";
import styles from "../login/login.module.css";

export function RegisterPage() {
    const handleRegister = (values: RegisterFormValues) => {
        void values;
    };

    return (
        <main className={styles.page}>
            <section className={styles.shell}>
                <aside className={styles.media}>
                    <img src={heroImage} alt="Experiencia Evenxa" className={styles.mediaImage} />
                    <div className={styles.mediaOverlay} />
                    <div className={styles.mediaContent}>
                        <span className={styles.kicker}>Accesos digitales</span>
                        <h2>Compra boletos con una cuenta lista para crecer.</h2>
                        <p>Este espacio quedo preparado para imagen ahora y video despues.</p>
                    </div>
                </aside>

                <section className={styles.panel}>
                    <div className={styles.copy}>
                        <img src={logo} alt="Evenxa" className={styles.formLogo} />
                        <h1>Crear cuenta</h1>
                        <p>Registrate para comprar boletos y recibir tus accesos digitales.</p>
                    </div>

                    <AuthForm mode="register" onSubmit={handleRegister} />

                    <p className={styles.switch}>
                        Ya tienes cuenta? <a href={routes.login}>Inicia sesion</a>
                    </p>
                </section>
            </section>
        </main>
    );
}
