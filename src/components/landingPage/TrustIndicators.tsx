import shieldCheck from "../../assets/shield-check-svgrepo-com.svg"
export default function TrustIndicators() {
  return (
    <section className="w-full bg-white/70 backdrop-blur-md py-8 px-4 flex flex-col items-center rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-lg mt-8">
      <div className="flex flex-wrap justify-center items-center gap-8 w-full max-w-4xl">
        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c4.svg" alt="Medizinisches Zertifikat" className="h-12 rounded-full border-4 border-[#A8E6CF] shadow-md" />
        <span className="text-[#2B7A7B] font-semibold text-lg">Medizinisch zertifiziert</span>
        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f468-200d-2695-fe0f.svg" alt="Pädiatrische Empfehlung" className="h-12 rounded-full border-4 border-[#68B2B3] shadow-md" />
        <span className="text-[#2B7A7B] font-semibold text-lg">Empfohlen von Kinderärzten</span>
        <img src={shieldCheck} alt="Sicherheitsstandard" className="h-12 rounded-full border-4 border-[#2B7A7B] shadow-md bg-white p-2" />
        <span className="text-[#2B7A7B] font-semibold text-lg">Sicherheitsgeprüft</span>
      </div>
    </section>
  );
}
