import board1 from "../../assets/board1.webp";
import board2 from "../../assets/board2.webp";
import board3 from "../../assets/board3.webp";

const products = [
  {
    img: board1,
    title: "Balance Board Classic",
    benefit: "Für tägliche Haltungskorrektur",
    id: "classic",
  },
  {
    img: board2,
    title: "Balance Board Pro",
    benefit: "Mit zusätzlicher Stabilität",
    id: "pro",
  },
  {
    img: board3,
    title: "Balance Board Kids",
    benefit: "Speziell für Kinder entwickelt",
    id: "kids",
  }
];

export default function ProductShowcase() {
  const handleAddToCart = (productId: string) => {
    // You can replace this with real cart logic
    console.log(`Produkt "${productId}" zum Warenkorb hinzugefügt`);
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#A8E6CF] to-[#68B2B3] py-16 px-4">
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-[#2C3E50] mb-10 text-center font-primary">
        Unsere Produkte
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition duration-300"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-40 h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-[#2B7A7B] mb-2 font-secondary">
              {product.title}
            </h3>
            <p className="text-[#7F8C8D] text-center mb-4">{product.benefit}</p>
            <button
              onClick={() => handleAddToCart(product.id)}
              className="mt-auto bg-[#2B7A7B] text-white font-medium px-5 py-2 rounded-full hover:bg-[#205f5f] transition"
            >
              Zum Warenkorb hinzufügen
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
