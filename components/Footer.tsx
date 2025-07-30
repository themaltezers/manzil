import Link from "next/link";
import {
    FaSquareInstagram,
    FaSquareFacebook,
    FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="flex flex-col gap-4 w-[97%] mx-auto">
            <section className="flex flex-col gap-2">
                <h3>Nous contacter</h3>
                <ul className="flex gap-2">
                    <li>
                        <Link href={"#"}>
                            <FaSquareInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            <FaSquareFacebook />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            {" "}
                            <FaLinkedin />
                        </Link>
                    </li>
                </ul>
            </section>
            <ul className="flex flex-col gap-2 mb-8">
                <h3>Explorer notre site</h3>
                <li>A propos</li>
                <li>Menu</li>
                <li>Carrière</li>
            </ul>
            <p className="mb-8">
                Copyright 2025 Manzil Brunch | Par <Link href="#">1344.fr</Link>
            </p>
        </footer>
    );
};

export default Footer;
