import { t, Language } from "@/lib/translations/Menu";

const SetMenus = ({ lang }: { lang: Language }) => {
    const section = t<{
        title: string;
        menus: {
            name: string;
            description: string;
            price: string;
        }[];
    }>("sections.setMenus", lang);

    return (
        <section id="set-menus" className="bg-[#fcfbf8] p-8">
            <h2 className="text-4xl text-center text-[#bc8158] mb-8">
                {section.title}
            </h2>

            <div className="grid grid-cols-4 gap-y-4 mb-4">
                {section.menus.map((menu, index: number) => (
                    <div key={index} className="contents">
                        <div className="col-span-3">
                            <span className="text-black block">
                                {menu.name}
                            </span>
                            <small className="text-gray-600 text-sm italic">
                                {menu.description}
                            </small>
                        </div>
                        <div className="text-black text-right col-span-1">
                            <span>{menu.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SetMenus;
