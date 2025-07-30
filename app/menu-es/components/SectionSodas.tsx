const SectionSodas = () => {
  return (
    <section id="sodas" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">REFRESCOS</h2>

      <div className="grid grid-cols-2 gap-y-4 mb-4">

        <span className="text-black">HAMOUD</span>
        <span className="text-black text-right">2,50</span>

        <span className="text-black">SELECTO</span>
        <span className="text-black text-right">2,50</span>

        <span className="text-black">AGUA CRISTALINA</span>
        <span className="text-black text-right">2,00</span>

      </div>

    </section>
  );
};

export default SectionSodas;