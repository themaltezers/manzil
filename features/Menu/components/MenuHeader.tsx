import { Language, t } from "@/lib/translations/Menu";

const MenuHeader = ({ lang }: { lang: Language }) => {
    return (
        <section className="text-center mb-12">
            <h1 className="text-8xl text-[#bc8158] mb-2">
                {t("header.title", lang)}
            </h1>
            <p className="text-2xl text-[#bc8158]">
                {t("header.subtitle", lang)}
            </p>
        </section>
    );
};

export default MenuHeader;
