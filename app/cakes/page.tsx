import Section from '@/components/Section';
import CakeCard from '@/components/CakeCard';
import styles from './page.module.css';

export const metadata = {
    title: 'Our Menu | Batter Dough',
    description: 'Explore our delicious range of custom cakes and desserts.',
};

const menuItems = [
    {
        category: "Signature Cakes",
        items: [
            { id: 101, name: "Vanilla Bean Drip", price: "From Rs. 18,500", image: "/images/signature.png", link: "/order" },
            { id: 102, name: "Chocolate Fudge", price: "From Rs. 20,000", image: "/images/hero.png", link: "/order" },
        ]
    },
    {
        category: "Cupcakes & Treats",
        items: [
            { id: 201, name: "Assorted Cupcakes (12)", price: "Rs. 8,500", image: "/images/cupcakes.png", link: "/order" },
            { id: 202, name: "Floral Cupcakes (6)", price: "Rs. 4,500", image: "/images/floral.png", link: "/order" },
        ]
    }
];

export default function CakesPage() {
    return (
        <div className={styles.container}>
            <Section title="Our Menu">
                <p className={styles.intro}>
                    All our cakes are baked fresh to order using the finest ingredients.
                    Prices are starting guides and vary based on customization.
                </p>

                {menuItems.map((cat, idx) => (
                    <div key={idx} className={styles.category}>
                        <h3 className={styles.catTitle}>{cat.category}</h3>
                        <div className={styles.grid}>
                            {cat.items.map(item => (
                                <CakeCard
                                    key={item.id}
                                    name={item.name}
                                    price={item.price}
                                    image={item.image}
                                    link={item.link}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </Section>
        </div>
    );
}
