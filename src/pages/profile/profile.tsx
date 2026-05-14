import { routes } from "../../app/router/routes";
import { getStoredSession } from "../../entities/session";
import styles from "./profile.module.css";

const mockProfile = {
    email: "usuario@evenxa.com",
    nombre: "Leonardo",
    apellido_paterno: "Lopez",
    apellido_materno: "Osornio",
    telefono: "4191187944",
    tipo_usuario: "Usuario",
};

const profileStats = [
    { label: "Boletos activos", value: "2" },
    { label: "Eventos asistidos", value: "8" },
    { label: "Compras", value: "12" },
];

const preferences = ["Musica en vivo", "Festivales", "Experiencias urbanas", "Comedia"];

export function ProfilePage() {
    const session = getStoredSession();
    const user = session?.user;
    const displayName = [user?.nombre, user?.apellido_paterno, user?.apellido_materno]
        .filter(Boolean)
        .join(" ") || `${mockProfile.nombre} ${mockProfile.apellido_paterno}`;
    const initials = displayName
        .split(" ")
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase();

    const profile = {
        email: user?.email ?? mockProfile.email,
        nombre: user?.nombre ?? mockProfile.nombre,
        apellido_paterno: user?.apellido_paterno ?? mockProfile.apellido_paterno,
        apellido_materno: user?.apellido_materno ?? mockProfile.apellido_materno,
        telefono: user?.telefono ?? mockProfile.telefono,
        tipo_usuario: user?.tipo_usuario ?? mockProfile.tipo_usuario,
    };

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.avatar} aria-hidden="true">{initials}</div>

                <div>
                    <span className={styles.eyebrow}>Mi perfil</span>
                    <h1>{displayName}</h1>
                    <p>Administra tus datos de cuenta, revisa tus accesos y manten tu informacion lista para futuras compras.</p>
                </div>

                <a className={styles.primaryAction} href={routes.myTickets}>Ver mis boletos</a>
            </section>

            <section className={styles.stats} aria-label="Resumen de actividad">
                {profileStats.map((stat) => (
                    <article key={stat.label}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                    </article>
                ))}
            </section>

            <section className={styles.layout}>
                <article className={styles.panel}>
                    <div className={styles.panelHeader}>
                        <div>
                            <span className={styles.eyebrow}>Cuenta</span>
                            <h2>Datos personales</h2>
                        </div>
                        <button type="button">Editar</button>
                    </div>

                    <dl className={styles.infoGrid}>
                        <div>
                            <dt>Nombre</dt>
                            <dd>{profile.nombre}</dd>
                        </div>
                        <div>
                            <dt>Apellido paterno</dt>
                            <dd>{profile.apellido_paterno}</dd>
                        </div>
                        <div>
                            <dt>Apellido materno</dt>
                            <dd>{profile.apellido_materno}</dd>
                        </div>
                        <div>
                            <dt>Correo</dt>
                            <dd>{profile.email}</dd>
                        </div>
                        <div>
                            <dt>Telefono</dt>
                            <dd>{profile.telefono}</dd>
                        </div>
                        <div>
                            <dt>Tipo de cuenta</dt>
                            <dd>{profile.tipo_usuario}</dd>
                        </div>
                    </dl>
                </article>

                <aside className={styles.panel}>
                    <div className={styles.panelHeader}>
                        <div>
                            <span className={styles.eyebrow}>Preferencias</span>
                            <h2>Intereses</h2>
                        </div>
                    </div>

                    <div className={styles.tags}>
                        {preferences.map((preference) => (
                            <span key={preference}>{preference}</span>
                        ))}
                    </div>
                </aside>
            </section>
        </main>
    );
}
