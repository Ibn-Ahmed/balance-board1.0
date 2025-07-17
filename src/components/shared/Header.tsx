import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(true);
    console.log("Menu opened, open state:", true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-[50] pointer-events-auto">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="flex w-8 h-8 rounded-full bg-[#2B7A7B] items-center justify-center text-white font-bold text-xl">MB</span>
            <span className="text-[#2B7A7B] font-bold text-xl tracking-tight max-[335px]:hidden">Medical Balance Board</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#problem" className="text-[#2B7A7B] hover:underline font-medium">Problem</a>
            <a href="#solution" className="text-[#2B7A7B] hover:underline font-medium">Lösung</a>
            <a href="#produkte" className="text-[#2B7A7B] hover:underline font-medium">Produkte</a>
            <a href="#vertrauen" className="text-[#2B7A7B] hover:underline font-medium">Vertrauen</a>
            <a href="#kontakt" className="text-[#2B7A7B] hover:underline font-medium">Kontakt</a>
          </nav>

          {/* Hamburger Button with SVG */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[#2B7A7B] text-[#2B7A7B] cursor-pointer"
            onClick={handleMenu}
            aria-label="Menü öffnen"
          >
            {/* Hamburger SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2B7A7B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu rendered outside header */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0  z-40"
            onClick={() => setOpen(false)}
            aria-label="Overlay to close menu"
          />

          {/* Slide-in Menu */}
          <aside
            className="fixed top-0 right-0 h-screen w-[40vw] min-w-[260px] max-w-[400px] bg-[#2B7A7B] z-[60] shadow-lg shadow-black/30
 flex flex-col items-end pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                className="cursor-pointer rounded-full p-2 bg-[#303535] text-[#2B7A7B] shadow-md"
                onClick={() => setOpen(false)}
                aria-label="Menü schließen"
              >
                {/* Close (X) SVG */}
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <line x1="6" y1="6" x2="22" y2="22" />
                  <line x1="22" y1="6" x2="6" y2="22" />
                </svg>
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-8 items-end pr-12 pb-12">
              <a href="#problem" className="text-[#303535] text-2xl font-semibold">Problem</a>
              <a href="#solution" className="text-[#303535] text-2xl font-semibold">Lösung</a>
              <a href="#produkte" className="text-[#303535] text-2xl font-semibold">Produkte</a>
              <a href="#vertrauen" className="text-[#303535] text-2xl font-semibold">Vertrauen</a>
              <a href="#kontakt" className="text-[#303535] text-2xl font-semibold">Kontakt</a>
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
