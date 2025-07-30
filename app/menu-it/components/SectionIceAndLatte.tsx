const SectionIceAndLatte = () => {
  return (
    <section id="ice-and-latte" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">CAFFÈ E TÈ FREDDO</h2>

      <div className="grid grid-cols-2 gap-y-4 mb-4">
        
        <div>
            <span className="text-black block">LATTE SPAGNOLO</span>
        </div>
        <div className="text-black text-right">
            <span>4,90</span>
        </div>

        <div>
            <span className="text-black block">LATTE FREDDO</span>
            <small className="text-gray-600 text-sm italic">caramello o pistacchio +2€</small>
        </div>
        <div className="text-black text-right">
            <span>4,90</span>
        </div>

        <div>
            <span className="text-black block">TÈ FREDDO PESCA MENTA</span>
        </div>
        <div className="text-black text-right">
            <span>5,90</span>
        </div>

        <div>
            <span className="text-black block">TÈ FREDDO ALLA ROSA</span>
        </div>
        <div className="text-black text-right">
            <span>5,90</span>
        </div>
        
      </div>

    </section>
  );
};

export default SectionIceAndLatte;