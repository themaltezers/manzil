const SectionHotDrinks = () => {
  return (
    <section id="hot-drinks" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">BEBIDAS CALIENTES</h2>

      <div className="grid grid-cols-2 gap-y-4 mb-4">
        <span className="text-black">EXPRESO</span>
        <span className="text-black text-right">2,50</span>

        <span className="text-black">TÉ DE MENTA</span>
        <span className="text-black text-right">2,00</span>

        <span className="text-black">LATTE</span>
        <span className="text-black text-right">4,50</span>

        <span className="text-black">CAPPUCCINO</span>
        <span className="text-black text-right">4,50</span>

        <span className="text-black">CHOCOLATE CALIENTE</span>
        <span className="text-black text-right">4,50</span>

        <span className="text-black">EXPRESO DOBLE</span>
        <span className="text-black text-right">4,00</span>

        <span className="text-black">AMERICANO</span>
        <span className="text-black text-right">3,00</span>
      </div>

    </section>
  );
};

export default SectionHotDrinks;