'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
            backgroundImage: `url('/fondaccueil.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
            maskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
          }}
        />
      </div>

      {/* === CONTENU PRINCIPAL === */}
      <main className="relative z-10 flex-1 flex flex-col items-start justify-center text-white px-10">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon site Next.js</h1>
        <p className="text-lg max-w-xl">
          Voici une démonstration d’une image positionnée à droite avec un fondu progressif pour s’intégrer au fond.
        </p>
      </main>

      {/* === RECTANGLES CLIQUABLES === */}
<section className="relative z-10 px-10 py-8 w-full flex flex-col md:flex-row gap-6">
  {/* Grand rectangle gauche */}
  <Link href="/page-gauche" className="md:w-[350px] w-full group">
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
  </Link>

  {/* Colonne droite */}
  <div className="md:w-full flex flex-col gap-6">
    {/* Rectangle haut droit */}
    <Link href="/page-haut-droit" className="group">
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
    </Link>

    {/* Rectangle bas droit */}
    <Link href="/page-bas-droit" className="group">
      <div className="bg-white/0 backdrop-blur-md hover:bg-white/10 transition rounded-2xl shadow-md hover:shadow-xl p-4 cursor-pointer md:w-[500px]">
        <div className="overflow-hidden rounded-xl mb-4">
          <img
            src="/mgebanniere.png"
            alt="Image bas droit"
            className="w-full h-[130px] object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="text-lg font-bold text-white">Inscription MGE</h3>
      </div>
    </Link>
  </div>
</section>
    </div>
  );
}
