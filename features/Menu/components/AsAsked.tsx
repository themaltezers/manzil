import { Language, t } from "@/lib/translations";

const AsAsked = ({ lang }: { lang: Language }) => {
    const section = t<{
        title: string;
        items: {
            name?: string;
            lines: string[];
            price: string;
        }[];
    }>("sections.asAsked", lang);

    return (
        <section id="as-asked" className="bg-[#fcfbf8] p-8">
            <h2 className="text-4xl text-center text-[#bc8158] mb-8">
                {section.title}
            </h2>

            <div className="grid grid-cols-4 gap-y-4 mb-4">
                {section.items.map((item, index: number) => (
                    <div key={index} className="contents">
                        <div className="col-span-3">
                            {item.name && (
                                <span className="text-black block">
                                    {item.name}
                                </span>
                            )}
                            {item.lines?.map((line: string, i: number) => (
                                <small
                                    key={i}
                                    className="text-gray-600 text-sm italic block"
                                >
                                    {line}
                                </small>
                            ))}
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

export default AsAsked;
