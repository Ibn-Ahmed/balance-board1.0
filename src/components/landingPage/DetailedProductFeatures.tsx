
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Hergestellt aus hochwertigem polierten Birkensperrholz",
  "Maximale Belastung: 60 kg",
  "Alle Ecken abgerundet und sorgfältig geschliffen",
  "Nachhaltige wasserbasierte und umweltfreundliche Lacke",
  "Allergikerfreundlich",
  "Montessori-Technologie",
  "Maße: 226 cm x 10 cm x 12 cm",
];

export default function DetailedProductFeatures() {
  return (
    <section className="bg-transparent py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Produkteigenschaften</h2>
        <ul className="grid gap-4 md:grid-cols-2 text-left text-gray-700">
          {features.map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
