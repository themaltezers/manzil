import { Language, t } from "@/lib/translations";

const ColdDrinks = ({ lang }: { lang: Language }) => {
    const section = t<{
        title: string;
        items: { name: string; description?: string; price: string }[];
    }>("sections.coldDrinks", lang);

    return (
        <section id="cold-drinks" className="bg-[#fcfbf8] p-8">
            <h2 className="text-4xl text-center text-[#bc8158] mb-8">
                {section.title}
            </h2>

            <div className="grid grid-cols-4 gap-y-4 mb-4">
                {section.items.map((item, index: number) => (
                    <div key={index} className="contents">
                        <div className="col-span-3">
                            <span className="text-black block">
                                {item.name}
                            </span>
                            {item.description && (
                                <small className="text-gray-600 text-sm italic">
                                    {item.description}
                                </small>
                            )}
                        </div>
                        <div className="col-span-1 text-black text-right">
                            <span>{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ColdDrinks;
