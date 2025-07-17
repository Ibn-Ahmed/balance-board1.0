import kidBoardImg from "../../assets/kidboard1.webp";

export default function SolutionSection() {
  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col md:flex-row items-center gap-12 max-w-[1200px] mx-auto">
      <div className="flex-1 flex flex-col items-start">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-[#2C3E50] mb-4 font-primary">Die Lösung</h2>
        <p className="text-[#7F8C8D] text-lg mb-6 font-secondary">
          Das Balance Board unterstützt die Entwicklung einer gesunden Körperhaltung und fördert die motorischen Fähigkeiten Ihres Kindes – medizinisch geprüft und empfohlen.
        </p>
        <ul className="list-disc pl-5 text-[#2B7A7B] mb-6">
          <li>Fördert Gleichgewicht und Koordination</li>
          <li>Stärkt die Rückenmuskulatur</li>
          <li>Medizinisch zertifiziert</li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={kidBoardImg} alt="Kind auf Balance Board" className="max-w-[350px] w-full rounded-xl shadow-lg" />
      </div>
    </section>
  );
}
