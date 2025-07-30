const SectionSodas = () => {
  return (
    <section id="sodas" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">SODAS</h2>

      <div className="grid grid-cols-4 gap-y-4 mb-4">
        <span className="text-black col-span-3">HAMOUD</span>
        <span className="text-black text-right col-span-1">2,50</span>

        <span className="text-black col-span-3">SELECTO</span>
        <span className="text-black text-right col-span-1">2,50</span>

        <span className="text-black col-span-3">EAU CRISTALINE</span>
        <span className="text-black text-right col-span-1">2,00</span>
      </div>
    </section>
  );
};

export default SectionSodas;
