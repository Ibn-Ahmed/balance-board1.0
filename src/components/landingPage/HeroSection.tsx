import boardImg from "../../assets/board1.webp";


export default function HeroSection() {
  return (
    <section className="relative z-0 mt-24 flex flex-col-reverse md:flex-row items-center justify-between max-w-[1200px] mx-auto py-20 px-4 gap-12">
      <div className="w-full md:w-2/5 flex flex-col items-start justify-center">
        <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight text-[#2C3E50] mb-6 font-primary">
          Medizinisches Balance Board für Kinder
        </h1>

        <p className="text-lg text-[#2B7A7B] mb-8 font-secondary drop-shadow-lg">
          Fördern Sie die gesunde Entwicklung und Haltung Ihres Kindes mit unserem medizinisch zertifizierten Balance Board.
        </p>

        <button className="bg-[#2B7A7B] text-white rounded-[6px] px-7 py-3 font-semibold shadow-md hover:bg-[#1E5A5B] transition duration-300 cursor-pointer">
          Jetzt kaufen
        </button>
      </div>
      <div className="w-full md:w-3/5 flex justify-center items-center">
        <img src={boardImg} alt="Balance Board" className="max-w-[400px] w-full rounded-xl shadow-xl" />
       
      </div>
    </section>
  );
}
