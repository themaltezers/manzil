const SectionHotDrinks = () => {
  return (
    <section id="hot-drinks" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">BOISSONS CHAUDES</h2>

      <div className="grid grid-cols-4 gap-y-4 mb-4">
        <span className="text-black col-span-3">EXPRESSO</span>
        <span className="text-black text-right col-span-1">2,50</span>

        <span className="text-black col-span-3">THE À LA MENTHE</span>
        <span className="text-black text-right col-span-1">2,00</span>

        <span className="text-black col-span-3">LATTE</span>
        <span className="text-black text-right col-span-1">4,50</span>

        <span className="text-black col-span-3">CAPPUCCINO</span>
        <span className="text-black text-right col-span-1">4,50</span>

        <span className="text-black col-span-3">CHOCOLAT CHAUD</span>
        <span className="text-black text-right col-span-1">4,50</span>

        <span className="text-black col-span-3">DOUBLE EXPRESSO</span>
        <span className="text-black text-right col-span-1">4,00</span>

        <span className="text-black col-span-3">AMERICANO</span>
        <span className="text-black text-right col-span-1">3,00</span>
      </div>

    </section>
  );
};

export default SectionHotDrinks;
