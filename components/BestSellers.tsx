import Link from 'next/link';
import Section from './Section';
import CakeCard from './CakeCard';
import styles from './BestSellers.module.css';

const products = [
    {
        id: 1,
        name: "Signature Drip Cake",
        price: "From Rs. 18,500",
        image: "/images/signature.png",
        link: "/cakes"
    },
    {
        id: 2,
        name: "Gourmet Cupcakes (Box of 12)",
        price: "From Rs. 8,500",
        image: "/images/cupcakes.png",
        link: "/cakes"
    },
    {
        id: 3,
        name: "Floral Celebration Cake",
        price: "From Rs. 15,000",
        image: "/images/floral.png",
        link: "/cakes"
    }
];

export default function BestSellers() {
    return (
        <Section title="Best Sellers">
            <div className={styles.grid}>
                {products.map((product) => (
                    <CakeCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        link={product.link}
                    />
                ))}
            </div>
        </Section>
    );
}
