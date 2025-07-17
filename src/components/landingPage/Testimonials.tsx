
const testimonials = [
  {
    name: "Dr. Anna Schulze",
    role: "Kinderärztin, München",
    text: "Ich empfehle das Balance Board allen Eltern. Es fördert Haltung, Gleichgewicht und macht den Kindern Freude!",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Lena Fischer",
    role: "Mutter von 2 Kindern",
    text: "Meine Tochter hat das Board sofort geliebt. Ihre Haltung hat sich deutlich verbessert.",
    image: "https://i.pravatar.cc/100?img=45",
  },
  {
    name: "Dr. Markus Weber",
    role: "Orthopäde, Hamburg",
    text: "Ein durchdachtes Produkt mit medizinischem Mehrwert. Besonders gut für die Rückenentwicklung.",
    image: "https://i.pravatar.cc/100?img=26",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Kundenstimmen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-left flex flex-col items-start space-y-4"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full border border-gray-200"
              />
              <p className="text-gray-700 italic">“{t.text}”</p>
              <div>
                <p className="font-semibold text-gray-800">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
