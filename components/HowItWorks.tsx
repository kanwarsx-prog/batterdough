import Section from './Section';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
    return (
        <Section title="How It Works" className="bg-beige">
            <div className={styles.steps}>
                <div className={styles.step}>
                    <span className={styles.number}>1</span>
                    <h3 className={styles.stepTitle}>Choose Your Design</h3>
                    <p className={styles.text}>Browse our collection or share your inspiration for a custom design.</p>
                </div>
                <div className={styles.step}>
                    <span className={styles.number}>2</span>
                    <h3 className={styles.stepTitle}>Place Your Order</h3>
                    <p className={styles.text}>Contact us via WhatsApp or our enquiry form to check availability.</p>
                </div>
                <div className={styles.step}>
                    <span className={styles.number}>3</span>
                    <h3 className={styles.stepTitle}>Celebrate!</h3>
                    <p className={styles.text}>Pick up your freshly baked cake and enjoy your special moment.</p>
                </div>
            </div>
        </Section>
    );
}
