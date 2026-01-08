import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.nav}`}>
                <Link href="/" className={styles.logo}>
                    Batter Dough <span style={{ fontSize: '0.8em', fontStyle: 'italic' }}>by Anu</span>
                </Link>
                <nav>
                    <ul className={styles.menu}>
                        <li><Link href="/" className={styles.link}>Home</Link></li>
                        <li><Link href="/cakes" className={styles.link}>Cakes</Link></li>
                        <li><Link href="/occasions" className={styles.link}>Occasions</Link></li>
                        <li><Link href="/about" className={styles.link}>About</Link></li>
                        <li><Link href="/order" className={styles.link}>Order</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
