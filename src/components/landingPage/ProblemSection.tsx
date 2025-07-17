export default function ProblemSection() {
  return (
    <section className="w-full py-16 px-4 flex flex-col items-center bg-transparent">
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-[#2C3E50] mb-4 font-primary drop-shadow-lg">Das Problem</h2>
      <p className="text-[#7F8C8D] text-lg max-w-2xl text-center mb-8 font-secondary drop-shadow-md bg-white/60 rounded-lg px-4 py-2 backdrop-blur-sm">
        Schlechte Haltung bei Kindern kann zu langfristigen gesundheitlichen Problemen führen. Studien zeigen, dass über 60% der Kinder in Deutschland Haltungsprobleme entwickeln.
      </p>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center">
        <div className="bg-white/70 backdrop-blur-md rounded-tl-[2.5rem] rounded-br-[1.5rem] shadow-lg p-6 flex-1 min-w-[220px] border-l-4 border-[#A8E6CF]">
          <span className="block text-3xl font-bold text-[#2B7A7B] mb-2 drop-shadow">60%</span>
          <span className="text-[#7F8C8D]">Kinder mit Haltungsproblemen</span>
        </div>
        <div className="bg-white/70 backdrop-blur-md rounded-tr-[2.5rem] rounded-bl-[1.5rem] shadow-lg p-6 flex-1 min-w-[220px] border-t-4 border-[#68B2B3]">
          <span className="block text-3xl font-bold text-[#2B7A7B] mb-2 drop-shadow">#1</span>
          <span className="text-[#7F8C8D]">Ursache: Bewegungsmangel</span>
        </div>
        <div className="bg-white/70 backdrop-blur-md rounded-b-[2.5rem] rounded-t-[1.5rem] shadow-lg p-6 flex-1 min-w-[220px] border-r-4 border-[#2B7A7B]">
          <span className="block text-3xl font-bold text-[#2B7A7B] mb-2 drop-shadow">30%</span>
          <span className="text-[#7F8C8D]">Langfristige Rückenprobleme</span>
        </div>
      </div>
    </section>
  );
}
