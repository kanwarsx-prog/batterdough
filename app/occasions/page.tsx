import Section from '@/components/Section';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
    title: 'Occasions | Batter Dough',
    description: 'Cakes for every special moment.',
};

const occasions = [
    { name: "Weddings", image: "/images/hero.png" },
    { name: "Birthdays", image: "/images/floral.png" },
    { name: "Baby Showers", image: "/images/cupcakes.png" },
    { name: "Anniversaries", image: "/images/signature.png" }
];

export default function OccasionsPage() {
    return (
        <div className={styles.container}>
            <Section title="Shop by Occasion">
                <div className={styles.grid}>
                    {occasions.map((occ, idx) => (
                        <Link key={idx} href="/order" className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image src={occ.image} alt={occ.name} fill className={styles.image} />
                                <div className={styles.overlay}>
                                    <h3 className={styles.title}>{occ.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </div>
    );
}
