import { Language, t } from "@/lib/translations/Menu";

const HotDrinks = ({ lang }: { lang: Language }) => {
    const section = t<{
        title: string;
        items: { name: string; price: string }[];
    }>("sections.hotDrinks", lang);

    return (
        <section id="hot-drinks" className="bg-[#fcfbf8] p-8">
            <h2 className="text-4xl text-center text-[#bc8158] mb-8">
                {section.title}
            </h2>

            <div className="grid grid-cols-4 gap-y-4 mb-4">
                {section.items.map((item, index: number) => (
                    <div key={index} className="contents">
                        <span className="text-black col-span-3">
                            {item.name}
                        </span>
                        <span className="text-black text-right col-span-1">
                            {item.price}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HotDrinks;
