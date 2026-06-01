import type { FormEvent } from "react";
import type { Raffle } from "../../../entities/raffle";
import { raffleStatusOptions } from "../model/adminUtils";
import styles from "../admin.module.css";

type RafflesPanelProps = {
    raffles: Raffle[];
    featuredRaffles: number;
    totalRaffleTickets: number;
    onCreateRaffle: (event: FormEvent<HTMLFormElement>) => void;
};

export function RafflesPanel({ raffles, featuredRaffles, totalRaffleTickets, onCreateRaffle }: RafflesPanelProps) {
    return (
        <>
            <section className={styles.statsGrid} aria-label="Resumen de sorteos">
                <article>
                    <span>Total sorteos</span>
                    <strong>{raffles.length}</strong>
                </article>
                <article>
                    <span>Destacados</span>
                    <strong>{featuredRaffles}</strong>
                </article>
                <article>
                    <span>Boletos vendidos</span>
                    <strong>{totalRaffleTickets.toLocaleString("es-MX")}</strong>
                </article>
            </section>

            <section className={styles.raffleLayout}>
                <form className={`${styles.panel} ${styles.raffleForm}`} onSubmit={onCreateRaffle}>
                    <div className={styles.panelHeader}>
                        <div>
                            <span>Sorteos mock</span>
                            <h2>Crear sorteo</h2>
                        </div>
                    </div>

                    <div className={styles.formGrid}>
                        <label>
                            Titulo
                            <input name="title" type="text" placeholder="Experiencia de lujo en Ibiza" required />
                        </label>
                        <label>
                            Subtitulo
                            <input name="subtitle" type="text" placeholder="Viaje completo para dos personas" required />
                        </label>
                        <label className={styles.fullField}>
                            Descripcion
                            <textarea name="description" rows={4} placeholder="Describe el premio y lo que incluye." required />
                        </label>
                        <label>
                            Precio visible
                            <input name="price" type="text" placeholder="$19.99" required />
                        </label>
                        <label>
                            Precio numerico
                            <input name="ticketPrice" type="number" min="0" step="0.01" placeholder="19.99" required />
                        </label>
                        <label>
                            Entradas
                            <input name="entries" type="text" placeholder="5,432 entradas" required />
                        </label>
                        <label>
                            Boletos vendidos
                            <input name="ticketsSold" type="text" placeholder="15,203" required />
                        </label>
                        <label>
                            Termina en
                            <input name="endsIn" type="text" placeholder="23:59:05" required />
                        </label>
                        <label>
                            Estado
                            <select name="status" defaultValue="trending">
                                {raffleStatusOptions.map((option) => (
                                    <option value={option.value} key={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label className={styles.fullField}>
                            URL de imagen
                            <input name="image" type="url" placeholder="Opcional: se usa una imagen mock si lo dejas vacio" />
                        </label>
                        <label className={styles.checkboxField}>
                            <input name="featured" type="checkbox" />
                            Marcar como sorteo destacado
                        </label>
                    </div>

                    <div className={styles.formActions}>
                        <button type="submit">Crear sorteo mock</button>
                    </div>
                </form>

                <section className={`${styles.panel} ${styles.rafflePreviewPanel}`}>
                    <div className={styles.panelHeader}>
                        <div>
                            <span>Catalogo local</span>
                            <h2>Sorteos creados</h2>
                        </div>
                    </div>

                    <div className={styles.rafflePreviewList}>
                        {raffles.map((raffle) => (
                            <article className={styles.rafflePreview} key={raffle.id}>
                                <img src={raffle.image} alt="" aria-hidden="true" />
                                <div>
                                    <span>{raffle.featured ? "Destacado" : raffleStatusOptions.find((option) => option.value === raffle.status)?.label}</span>
                                    <strong>{raffle.title}</strong>
                                    <p>{raffle.subtitle}</p>
                                    <small>{raffle.price} / boleto - {raffle.ticketsSold} vendidos</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </section>
        </>
    );
}
