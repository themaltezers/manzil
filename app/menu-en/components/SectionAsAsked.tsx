const SectionAsAsked = () => {
    return (
        <section id="as-asked" className="bg-[#fcfbf8] p-8">
            <h2 className="text-4xl text-center text-[#bc8158] mb-8">À LA CARTE</h2>

            <div className="grid grid-cols-2 gap-y-4 mb-4">
                <div>
                    <span className="text-black block">ASSORTIMENT ORIENTAL</span>
                    <small className="text-gray-600 text-sm italic block">msemen</small>
                    <small className="text-gray-600 text-sm italic block">baghrir</small>
                    <small className="text-gray-600 text-sm italic block">harcha</small>
                </div>
                <div className="text-black text-right">
                    <span>2,50</span>
                </div>

                <div>
                    <span className="text-black block">SUPPLÉMENTS</span>
                    <small className="text-gray-600 text-sm italic block">msemen fromage</small>
                    <small className="text-gray-600 text-sm italic block">harcha fromage</small>
                    <small className="text-gray-600 text-sm italic block">cake maison</small>
                </div>
                <div className="text-black text-right">
                    <span>3,50</span>
                </div>

                <div>
                    <small className="text-gray-600 text-sm italic block">Amlou</small>
                </div>
                <div className="text-black text-right">
                    <span>2,00</span>
                </div>

                <div>
                    <small className="text-gray-600 text-sm italic block">Nutella</small>
                    <small className="text-gray-600 text-sm italic block">Confiture</small>
                    <small className="text-gray-600 text-sm italic block">Fromage</small>
                    <small className="text-gray-600 text-sm italic block">Miel</small>
                </div>
                <div className="text-black text-right">
                    <span>1,00</span>
                </div>
            </div>
        </section>
    );
};

export default SectionAsAsked;
