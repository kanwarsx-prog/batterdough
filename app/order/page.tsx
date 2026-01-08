import Section from '@/components/Section';
import styles from './page.module.css';

export const metadata = {
    title: 'Order a Cake | Batter Dough',
    description: 'Place an order for your custom cake.',
};

export default function OrderPage() {
    return (
        <div className={styles.container}>
            <Section title="Start Your Order">
                <div className={styles.content}>
                    <p className={styles.intro}>
                        Please fill out the form below to enquire about a date. We will get back to you within 24 hours to confirm availability and discuss your design.
                    </p>

                    <form className={styles.form}>
                        <div className={styles.group}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="date">Date Required</label>
                            <input type="date" id="date" name="date" required />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="occasion">Occasion</label>
                            <select id="occasion" name="occasion">
                                <option value="">Select Occasion</option>
                                <option value="birthday">Birthday</option>
                                <option value="wedding">Wedding</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="babyshower">Baby Shower</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="details">Cake Details / Theme</label>
                            <textarea id="details" name="details" rows={4} placeholder="Describe your dream cake (flavor, colors, theme)..."></textarea>
                        </div>

                        <button type="submit" className="btn" style={{ width: '100%' }}>Send Enquiry</button>
                    </form>

                    <div className={styles.whatsapp}>
                        <p>Or chat with us directly:</p>
                        <a href="https://wa.me/1234567890" className={styles.waLink}>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    );
}
