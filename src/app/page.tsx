'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(to bottom, #c51c53, #6f085a)",
      }}
    >
      {/* === HEADER === */}
      <header className="w-full text-white px-6 py-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <Image
            src="/1753283788294.png"
            alt="Logo"
            width={70}
            height={70}
            className="rounded-full"
          />
          <h2 className="text-2xl font-bold">1217 Website</h2>
        </div>

        <nav className="flex gap-6 text-xl font-semibold relative">
          <Link href="/" className="hover:bg-white/10 px-3 py-2 rounded transition">
            Accueil
          </Link>
          <Link href="/statistiques" className="hover:bg-white/10 px-3 py-2 rounded transition">
            Statistiques
          </Link>
          <Link href="/inscriptions" className="hover:bg-white/10 px-3 py-2 rounded transition">
            Inscriptions
          </Link>
          <Link href="/calendrier" className="hover:bg-white/10 px-3 py-2 rounded transition">
            Calendrier
          </Link>
        </nav>
      </header>

      {/* === IMAGE DROITE AVEC FONDU VERS LA GAUCHE === */}
      <div className="absolute top-0 right-0 h-full w-2/5 z-0 pointer-events-none">
  <div
    className="w-full h-full"
    style={{
  backgroundImage: "url('/mulan.png')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right center',
  WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
  maskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
  WebkitMaskSize: '100% 100%',
  maskSize: '100% 100%',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  minHeight: '100vh',
  backgroundColor: '#000',
}}
  />
</div>
      {/* === CONTENU PRINCIPAL === */}
      <main className="relative z-10 flex-1 flex flex-col items-start justify-center text-white px-10">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur le site du KD 1217</h1>
        <p className="text-lg max-w-xl">
          Vous y trouverez les dasboards de statistiques de tout les kvks référencés, ainsi que chaque inscriptions aux mge ou osiris. Un calendrier est egalement en construction.
        </p>
      </main>

      {/* === RECTANGLES CLIQUABLES === */}
      <section className="relative z-10 px-10 py-8 w-full flex flex-col md:flex-row gap-6">
        {/* Grand rectangle gauche */}
        <a
          href="https://lookerstudio.google.com/reporting/48713b01-bb57-4a6a-8096-2a1d9e0d9aaf"
          target="_blank"
          rel="noopener noreferrer"
          className="md:w-[350px] w-full group"
        >
          <div className="bg-white/05 backdrop-blur-md hover:bg-white/10 transition rounded-2xl shadow-md hover:shadow-xl p-4 cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src="/periode3.png"
                alt="Image gauche"
                className="w-full h-[380px] object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="text-xl font-bold text-white">KVK en cours</h2>
          </div>
        </a>

        {/* Colonne droite */}
        <div className="md:w-full flex flex-col gap-6">
          {/* Rectangle haut droit */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScSijpJgH_FhIbQ2VkCvdQ6IN0bZdKznTGzFIYELwFLu7Wu3w/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white/08 backdrop-blur-md hover:bg-white/10 transition rounded-2xl shadow-md hover:shadow-xl p-4 cursor-pointer md:w-[500px]">
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src="/aoobanniere2.png"
                  alt="Image haut droit"
                  className="w-full h-[150px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Inscription Ark of Osiris 10/08 22h UTC</h3>
            </div>
          </a>

          {/* Rectangle bas droit */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdzBN7kSuuvXq26nmgv0g3PCb68esHGUSi2j3mFA0OCU9COpQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white/0 backdrop-blur-md hover:bg-white/10 transition rounded-2xl shadow-md hover:shadow-xl p-4 cursor-pointer md:w-[500px]">
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src="/mgebanniere.png"
                  alt="Image bas droit"
                  className="w-full h-[130px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Inscription MGE INF 28/07</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
