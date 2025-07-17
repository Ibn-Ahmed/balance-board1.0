
const specs = [
  { label: "Material", value: "Poliertes Birkensperrholz" },
  { label: "Maße", value: "226 cm x 10 cm x 12 cm" },
  { label: "Maximale Belastung", value: "60 kg" },
  { label: "Oberfläche", value: "Wasserbasierte, umweltfreundliche Lacke" },
  { label: "Zertifizierungen", value: "CE, Medizinisch geprüft" },
  { label: "Geeignet für", value: "Kinder ab 2 Jahren" },
  { label: "Technologie", value: "Montessori-inspiriertes Design" },
];

export default function TechnicalSpecifications() {
  return (
    <section className="bg-transparent-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Technische Daten
        </h2>
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <dl className="divide-y divide-gray-200">
            {specs.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between px-6 py-4"
              >
                <dt className="text-gray-600 font-medium">{item.label}</dt>
                <dd className="text-gray-800 mt-1 sm:mt-0">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
