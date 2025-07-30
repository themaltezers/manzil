const SectionSalty = () => {
    return (
        <section id="salty-menu" className="bg-[#fcfbf8] p-8">
            <h2 className="text-4xl text-center text-[#bc8158] mb-8">OUR SAVORY DISHES</h2>

            <div className="grid grid-cols-2 gap-y-4 mb-4">
                <div>
                    <span className="text-black block">AVOCADO TOAST</span>
                    <small className="text-gray-600 text-sm italic">
                        avocado guacamole, fresh cheese, poached egg, paprika, lime
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>13,90</span>
                </div>

                <div>
                    <span className="text-black block">STUFFED MSEMEN</span>
                    <small className="text-gray-600 text-sm italic">
                        fresh msemens, stuffed with spice-marinated chicken and a melting layer of cheddar
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>13,90</span>
                </div>

                <div>
                    <span className="text-black block">MANZIL ADDICT</span>
                    <small className="text-gray-600 text-sm italic">
                        on a msemen base, 1 sliced avocado, shredded beef, 2 poached eggs with hollandaise sauce
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>14,90</span>
                </div>

                <div>
                    <span className="text-black block">SOUP & BRICK</span>
                    <small className="text-gray-600 text-sm italic">
                        soup of the day, square brick with potato, chicken and cheddar
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>12,90</span>
                </div>

                <div>
                    <span className="text-black block">THE CLUB</span>
                    <small className="text-gray-600 text-sm italic">
                        toasted country bread, pesto layer, garlic cherry tomato sauté, stracciatella, pastrami with fig balsamic vinegar
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>14,90</span>
                </div>
            </div>
        </section>
    );
};

export default SectionSalty;
