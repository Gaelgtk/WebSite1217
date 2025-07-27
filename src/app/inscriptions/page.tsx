'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function InscriptionPage() {
  return (
    <div
      className="relative min-h-screen flex flex-col text-white"
      style={{
        background: "linear-gradient(to bottom, #c51c53, #6f085a)",
      }}
    >
      {/* === IMAGE DROITE AVEC FONDU VERS LA GAUCHE === */}
      <div className="absolute top-0 right-0 h-full w-2/5 z-0 pointer-events-none">
  <div
    className="w-full h-full"
    style={{
      backgroundImage: `url('/mulan.png')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      WebkitMaskImage:
        'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
      maskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
      WebkitMaskSize: '100% 100%',
      maskSize: '100% 100%',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      minHeight: '100vh', // important
      backgroundColor: '#000', // fallback visuel
    }}
  />
</div>

      {/* ==== OMBRAGE POUR CONTRASTE ==== */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* ==== HEADER ==== */}
      <header className="relative z-10 w-full text-white px-6 py-4 flex items-center justify-between">
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

        <nav className="flex gap-6 text-xl font-semibold">
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

      {/* ==== CONTENU PRINCIPAL ==== */}
      <main className="relative z-10 px-10 py-8 w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-center"></h1>

        {/* === RECTANGLES CLIQUABLES === */}
        <section className="relative z-10 px-10 py-8 w-full flex flex-col md:flex-row gap-6 items-start mt-21">

          {/* Grand rectangle gauche */}
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdzBN7kSuuvXq26nmgv0g3PCb68esHGUSi2j3mFA0OCU9COpQ/viewform?usp=dialog" target="_blank" className="md:w-[750px] w-full group mt-[-130px] ml-[-35px]">
            <div className="bg-white/5 backdrop-blur-md hover:bg-white/10 transition rounded-2xl shadow-md hover:shadow-xl p-4 cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src="/mgebanniere.png"
                  alt="Image gauche"
                  className="w-full h-[170px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="text-xl font-bold text-white">Inscription MGE INF 27/07</h2>
            </div>
          </Link>

          {/* Colonne droite */}
          <div className="md:w-[750px] w-full flex flex-col gap-6 mt-32 ml-[-775px]">
            {/* Rectangle haut droit */}
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScSijpJgH_FhIbQ2VkCvdQ6IN0bZdKznTGzFIYELwFLu7Wu3w/viewform?usp=dialog" target="_blank" className="group">
              <div className="bg-white/8 backdrop-blur-md hover:bg-white/10 transition rounded-2xl shadow-md hover:shadow-xl p-4 cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src="/aoobanniere2.png"
                    alt="Image haut droit"
                    className="w-full h-[190px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-white">Inscription Ark of Osiris 10/08 22h UTC</h3>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
