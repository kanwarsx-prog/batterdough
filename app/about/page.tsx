import Section from '@/components/Section';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
    title: 'About Anu | Batter Dough',
    description: 'Meet the baker behind Batter Dough.',
};

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <Section title="About Anu">
                <div className={styles.content}>
                    <div className={styles.imageWrapper}>
                        {/* Placeholder for portrait, reusing floral for now or generate new? Using floral as symbolic */}
                        <Image src="/images/floral.png" alt="Anu baking" fill className={styles.image} />
                    </div>
                    <div className={styles.text}>
                        <p>
                            Hi, I’m Anu — a passionate home baker bringing sweet dreams to life from my kitchen.
                        </p>
                        <p>
                            Batter Dough started as a love letter to the art of baking. Unlike commercial bakeries,
                            everything here is made in small batches, ensuring individual attention to detail and that
                            unmistakable "homemade" taste. I use only the ingredients I would feed my own family—real butter,
                            free-range eggs, and the finest chocolates.
                        </p>
                        <p>
                            When you order from me, you're not just getting a cake; you're getting a personal creation
                            baked specifically for you, right here in my home.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
