const SectionHotDrinks = () => {
  return (
    <section id="hot-drinks" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">HOT DRINKS</h2>

      <div className="grid grid-cols-2 gap-y-4 mb-4">
        <span className="text-black">ESPRESSO</span>
        <span className="text-black text-right">2,50</span>

        <span className="text-black">MINT TEA</span>
        <span className="text-black text-right">2,00</span>

        <span className="text-black">LATTE</span>
        <span className="text-black text-right">4,50</span>

        <span className="text-black">CAPPUCCINO</span>
        <span className="text-black text-right">4,50</span>

        <span className="text-black">HOT CHOCOLATE</span>
        <span className="text-black text-right">4,50</span>

        <span className="text-black">DOUBLE ESPRESSO</span>
        <span className="text-black text-right">4,00</span>

        <span className="text-black">AMERICANO</span>
        <span className="text-black text-right">3,00</span>
      </div>

    </section>
  );
};

export default SectionHotDrinks;