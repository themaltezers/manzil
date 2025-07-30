const SectionSalty = () => {
    return (
        <section id="salty-menu" className="bg-[#fcfbf8] p-8">
            <h2 className="text-4xl text-center text-[#bc8158] mb-8">NUESTROS PLATOS SALADOS</h2>

            <div className="grid grid-cols-2 gap-y-4 mb-4">
                <div>
                    <span className="text-black block">TOSTADA DE AGUACATE</span>
                    <small className="text-gray-600 text-sm italic">
                        guacamole de aguacate, queso fresco, huevo pochado, pimentón, lima
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>13,90</span>
                </div>

                <div>
                    <span className="text-black block">MSEMEN RELLENO</span>
                    <small className="text-gray-600 text-sm italic">
                        msemens frescos, rellenos de pollo marinado con especias sabrosas y una capa derretida de cheddar
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>13,90</span>
                </div>

                <div>
                    <span className="text-black block">MANZIL ADDICT</span>
                    <small className="text-gray-600 text-sm italic">
                        sobre una base de msemen, 1 aguacate cortado, carne deshebrada, 2 huevos pochados con salsa holandesa
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>14,90</span>
                </div>

                <div>
                    <span className="text-black block">SOPA Y BRICK</span>
                    <small className="text-gray-600 text-sm italic">
                        sopa del día, brick cuadrado con patata, pollo y cheddar
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>12,90</span>
                </div>

                <div>
                    <span className="text-black block">EL CLUB</span>
                    <small className="text-gray-600 text-sm italic">
                        pan de campo tostado, capa de pesto, salteado de tomate cherry con ajo, stracciatella, pastrami con vinagre balsámico de higo
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
