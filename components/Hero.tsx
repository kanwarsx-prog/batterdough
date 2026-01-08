import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <Image
                src="/images/hero-birthday.png"
                alt="Beautiful Birthday Cake in Colombo"
                fill
                priority
                className={styles.background}
            />
            <div className={styles.content}>
                <h1 className={styles.title}>Homemade happiness, baked from the heart.</h1>
                <p className={styles.subtitle}>Artisan cakes created in my home kitchen for your special celebrations.</p>
                <Link href="/order" className="btn">
                    Order a Cake
                </Link>
            </div>
        </section>
    );
}
