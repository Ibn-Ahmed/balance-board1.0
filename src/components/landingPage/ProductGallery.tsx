const images = [
  { src: "/src/assets/kidboard1.webp", alt: "Kind spielt mit Balance Board 1" },
  { src: "/src/assets/kidboard2.webp", alt: "Kind spielt mit Balance Board 2" },
  { src: "/src/assets/kidboard3.webp", alt: "Kind spielt mit Balance Board 3" },
  { src: "/src/assets/kidboard4.webp", alt: "Kind spielt mit Balance Board 4" },
];

export default function ProductGallery() {
  return (
    <section className="bg-transparent py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Produktgalerie
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
