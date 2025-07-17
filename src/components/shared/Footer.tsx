export default function Footer() {
  return (
    <footer className="w-full bg-white/90 backdrop-blur-lg py-16 px-8 flex flex-col items-center rounded-t-[2.5rem] shadow-inner mt-16 border-t-4 border-[#A8E6CF]">
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-4 md:gap-6">
          <span className="text-[#2B7A7B] font-bold text-2xl mb-2">Medical Balance Board</span>
          <span className="text-[#7F8C8D] text-base">&copy; {new Date().getFullYear()} Alle Rechte vorbehalten.</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 w-full md:w-auto">
          <a href="#impressum" className="text-[#2B7A7B] hover:underline text-base">Impressum</a>
          <a href="#datenschutz" className="text-[#2B7A7B] hover:underline text-base">Datenschutz</a>
          <a href="#kontakt" className="text-[#2B7A7B] hover:underline text-base">Kontakt</a>
          <a href="#agb" className="text-[#2B7A7B] hover:underline text-base">AGB</a>
          <a href="#faq" className="text-[#2B7A7B] hover:underline text-base">FAQ</a>
          <a href="#versand" className="text-[#2B7A7B] hover:underline text-base">Versand</a>
          <a href="#ruckgabe" className="text-[#2B7A7B] hover:underline text-base">Rückgabe</a>
          <a href="#karriere" className="text-[#2B7A7B] hover:underline text-base">Karriere</a>
          <a href="#presse" className="text-[#2B7A7B] hover:underline text-base">Presse</a>
          <a href="#newsletter" className="text-[#2B7A7B] hover:underline text-base">Newsletter</a>
        </div>
      </div>
    </footer>
  );
}
