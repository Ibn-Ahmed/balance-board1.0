import kidboard1 from "../../assets/kidboard1.webp";
import kidboard2 from "../../assets/kidboard2.webp";
import kidboard3 from "../../assets/kidboard3.webp";
import kidboard4 from "../../assets/kidboard4.webp";
const images = [
  { src: kidboard1, alt: "Kind spielt mit Balance Board 1" },
  { src: kidboard2, alt: "Kind spielt mit Balance Board 2" },
  { src: kidboard3, alt: "Kind spielt mit Balance Board 3" },
  { src: kidboard4, alt: "Kind spielt mit Balance Board 4" },
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
