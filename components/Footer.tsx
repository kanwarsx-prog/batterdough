import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.section}>
                        <h3 className={styles.title}>Batter Dough by Anu</h3>
                        <p className={styles.text}>Handcrafted custom cakes for your special celebrations.</p>
                    </div>
                    <div className={styles.section}>
                        <h3 className={styles.title}>Contact</h3>
                        <p className={styles.text}>WhatsApp: +94 77 123 4567</p>
                        <p className={styles.text}>Email: hello@batterdough.lk</p>
                        <p className={styles.text}>Serving: Colombo & Suburbs, Sri Lanka</p>
                    </div>
                    <div className={styles.section}>
                        <h3 className={styles.title}>Follow Us</h3>
                        <p className={styles.text}>Instagram @batterdough</p>
                        <p className={styles.text}>FaceBook @batterdough</p>
                    </div>
                </div>
                <div className={styles.bottom}>
                    &copy; {new Date().getFullYear()} Batter Dough by Anu. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
