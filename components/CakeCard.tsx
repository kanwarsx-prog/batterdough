import Link from 'next/link';
import Image from 'next/image';
import styles from './CakeCard.module.css';

interface CakeCardProps {
    name: string;
    price: string;
    image: string;
    link: string;
}

export default function CakeCard({ name, price, image, link }: CakeCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={name}
                    fill
                    className={styles.image}
                />
            </div>
            <div className={styles.info}>
                <div>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.price}>{price}</p>
                </div>
                <Link href={link} className="btn-secondary" style={{ display: 'inline-block', fontSize: '0.9rem', padding: '0.5rem 1.5rem' }}>
                    View Details
                </Link>
            </div>
        </div>
    );
}
