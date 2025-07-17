import { FaShieldAlt, FaUndoAlt, FaTruck } from "react-icons/fa";

const items = [
  {
    icon: <FaShieldAlt className="text-green-600 text-2xl" />,
    title: "2 Jahre Garantie",
    description: "Unsere Boards sind auf Langlebigkeit ausgelegt – mit 2 Jahren Garantie.",
  },
  {
    icon: <FaUndoAlt className="text-blue-600 text-2xl" />,
    title: "30 Tage Rückgabe",
    description: "Unzufrieden? Kein Problem. Rückgabe oder Umtausch innerhalb von 30 Tagen.",
  },
  {
    icon: <FaTruck className="text-purple-600 text-2xl" />,
    title: "Kostenloser Versand",
    description: "Innerhalb Deutschlands liefern wir versandkostenfrei zu dir nach Hause.",
  },
];

export default function GuaranteeSection() {
  return (
    <section className="bg-transparent py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Garantie & Rückgabe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
