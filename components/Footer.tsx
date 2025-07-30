import Link from "next/link";
import styles from "@/styles/components/header.module.scss";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className="contact">
                <h3>Nous contacter</h3>
                <ul className="flex gap-2">
                    <li>facebook</li>
                    <li>instagram</li>
                    <li>linkedin</li>
                </ul>
            </section>
            <ul className="flex flex-col gap-2 mb-8">
                <h3>Explore our site</h3>
                <li>A propos</li>
                <li>Carrière</li>
                <li>Nous contacter</li>
            </ul>
            <p className="mb-8">
                Copyright 2025 Manzil Brunch | Par <Link href="#">1344.fr</Link>
            </p>
        </footer>
    );
};

export default Footer;
