const SectionHotDrinks = () => {
  return (
    <section id="hot-drinks" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">BOISSONS CHAUDES</h2>

      <div className="grid grid-cols-2 gap-y-4 mb-4">
        <span className="text-black">EXPRESSO</span>
        <span className="text-black text-right">2,50</span>

        <span className="text-black">THE À LA MENTHE</span>
        <span className="text-black text-right">2,00</span>

        <span className="text-black">LATTE</span>
        <span className="text-black text-right">4,50</span>

        <span className="text-black">CAPPUCCINO</span>
        <span className="text-black text-right">4,50</span>

        <span className="text-black">CHOCOLAT CHAUD</span>
        <span className="text-black text-right">4,50</span>

        <span className="text-black">DOUBLE EXPRESSO</span>
        <span className="text-black text-right">4,00</span>

        <span className="text-black">AMERICANO</span>
        <span className="text-black text-right">3,00</span>
      </div>

    </section>
  );
};

export default SectionHotDrinks;