const SectionIceAndLatte = () => {
  return (
    <section id="ice-and-latte" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">ICED COFFEE & TEA</h2>

      <div className="grid grid-cols-2 gap-y-4 mb-4">
        
        <div>
            <span className="text-black block">SPANISH LATTE</span>
        </div>
        <div className="text-black text-right">
            <span>4,90</span>
        </div>

        <div>
            <span className="text-black block">ICED LATTE</span>
            <small className="text-gray-600 text-sm italic">caramel or pistachio +2€</small>
        </div>
        <div className="text-black text-right">
            <span>4,90</span>
        </div>

        <div>
            <span className="text-black block">ICED PEACH MINT TEA</span>
        </div>
        <div className="text-black text-right">
            <span>5,90</span>
        </div>

        <div>
            <span className="text-black block">ICED ROSE TEA</span>
        </div>
        <div className="text-black text-right">
            <span>5,90</span>
        </div>
        
      </div>

    </section>
  );
};

export default SectionIceAndLatte;