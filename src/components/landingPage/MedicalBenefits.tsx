
import { FaHeartPulse, FaChild, FaCertificate, FaCheck } from "react-icons/fa6";

const benefits = [
  { icon: <FaChild className="text-blue-500" />, text: "Fördert Gleichgewicht und Koordination" },
  { icon: <FaHeartPulse className="text-pink-500" />, text: "Stärkt die Rückenmuskulatur" },
  { icon: <FaCertificate className="text-green-500" />, text: "Medizinisch zertifiziert" },
  { icon: <FaCheck className="text-purple-500" />, text: "Unterstützt gesunde Körperhaltung" },
  { icon: <FaCheck className="text-teal-500" />, text: "Beugt Haltungsschäden vor" },
];

export default function MedicalBenefits() {
  return (
    <section className="bg-gradient-to-r from-white via-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Medizinische Vorteile</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-start space-x-4">
              <div className="text-2xl">{item.icon}</div>
              <span className="text-gray-700 text-lg">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
