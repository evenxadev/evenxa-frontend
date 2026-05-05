import styles from "./landing.module.css";
import heroImage from "../../shared/assets/images/hero/hero.jpg";
import logo from "../../shared/assets/images/logo/logo-blanco.png";

const eventHighlights = [
    "Produccion y experiencia curada por Evenxa",
    "Musica, ambiente y comunidad en una misma noche",
    "Anuncio oficial y boletos disponibles muy pronto",
];

const experienceBlocks = [
    {
        title: "Eventos con intencion",
        text: "Creamos experiencias presenciales para que cada detalle se sienta cuidado desde la llegada hasta el cierre.",
    },
    {
        title: "Operacion humana",
        text: "La organizacion se maneja de forma directa, cercana y flexible, sin depender de flujos complicados.",
    },
    {
        title: "Boletaje en camino",
        text: "La plataforma completa llegara despues; por ahora este espacio concentra la promocion del primer evento.",
    },
];

export function LandingPage() {
    return (
        <main className={styles.page}>
            <nav className={styles.nav} aria-label="Evenxa landing">
                <a href="#inicio" className={styles.brand} aria-label="Evenxa inicio">
                    <img src={logo} alt="Evenxa" />
                </a>

                <div className={styles.navLinks}>
                    <a href="#evento">Evento</a>
                    <a href="#evenxa">Evenxa</a>
                    <a href="#contacto">Contacto</a>
                </div>
            </nav>

            <section
                id="inicio"
                className={styles.hero}
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className={styles.heroShade} />

                <div className={styles.heroContent}>
                    <p className={styles.kicker}>Primer evento Evenxa</p>
                    <h1>Una noche creada para vivirla en persona.</h1>
                    <p className={styles.lead}>
                        Evenxa inicia con una experiencia presencial antes del lanzamiento
                        completo de la boletera. Muy pronto revelaremos fecha, sede y acceso.
                    </p>

                    <div className={styles.heroActions}>
                        <a className={styles.primaryAction} href="#evento">
                            Ver avance
                        </a>
                        <a className={styles.secondaryAction} href="#contacto">
                            Contactar
                        </a>
                    </div>
                </div>
            </section>

            <section id="evento" className={styles.eventBand}>
                <div className={styles.eventIntro}>
                    <span className={styles.sectionLabel}>Evento inaugural</span>
                    <h2>Evenxa presenta su primera experiencia.</h2>
                    <p>
                        Esta landing funciona como punto de promocion mientras el sitio de
                        boletaje se prepara. El objetivo es anunciar, generar expectativa y
                        abrir conversacion directa con asistentes, aliados y talento.
                    </p>
                </div>

                <div className={styles.highlightList}>
                    {eventHighlights.map((item) => (
                        <div className={styles.highlightItem} key={item}>
                            <span />
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="evenxa" className={styles.about}>
                <div className={styles.aboutHeader}>
                    <span className={styles.sectionLabel}>Que es Evenxa</span>
                    <h2>Mas que una boletera: una marca que produce experiencias.</h2>
                </div>

                <div className={styles.experienceGrid}>
                    {experienceBlocks.map((block) => (
                        <article className={styles.experienceBlock} key={block.title}>
                            <h3>{block.title}</h3>
                            <p>{block.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="contacto" className={styles.contact}>
                <div>
                    <span className={styles.sectionLabel}>Contacto</span>
                    <h2>Quieres saber del evento antes que nadie?</h2>
                    <p>
                        Deja este espacio listo para conectar el canal oficial de Evenxa:
                        WhatsApp, Instagram, formulario o el medio que definas para la campana.
                    </p>
                </div>

                <a className={styles.primaryAction} href="mailto:hola@evenxa.com">
                    hola@evenxa.com
                </a>
            </section>
        </main>
    );
}
