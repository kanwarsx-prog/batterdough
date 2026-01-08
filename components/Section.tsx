import styles from './Section.module.css';

interface SectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string; // Allow extending
    id?: string;
}

export default function Section({ title, children, className, id }: SectionProps) {
    return (
        <section className={`${styles.section} ${className || ''}`} id={id}>
            <div className="container">
                {title && <h2 className={styles.heading}>{title}</h2>}
                {children}
            </div>
        </section>
    );
}
