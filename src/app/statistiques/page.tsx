'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PlusGrandGouverneurPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 🔁 Liste des rectangles carrousel
  const rightRects = [
    // 🔷 Rectangle carrousel 1
    {
      href: "https://lookerstudio.google.com/reporting/48713b01-bb57-4a6a-8096-2a1d9e0d9aaf",
      src: "/periode1.png",
      alt: "Titre 1",
      title: "Stats KVK 22/05",
    },
    // 🔷 Rectangle carrousel 2
    {
      href: "https://lookerstudio.google.com/reporting/48713b01-bb57-4a6a-8096-2a1d9e0d9aaf",
      src: "/periode2.png",
      alt: "Titre 2",
      title: "Stats KVK 14/02",
    },
    // 🔷 Rectangle carrousel 3
    {
      href: "https://lookerstudio.google.com/reporting/48713b01-bb57-4a6a-8096-2a1d9e0d9aaf",
      src: "/periode3.png",
      alt: "Titre 3",
      title: "Stats KVK ...",
    },
  ];

  return (
    <div
      className="relative min-h-screen flex flex-col text-white"
      style={{
        background: "linear-gradient(to bottom, #c51c53, #6f085a)",
      }}
    >
      {/* IMAGE DROITE AVEC FONDU */}
      <div className="absolute top-0 right-0 h-full w-2/5 z-0 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url('/fondaccueil.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        />
      </div>

      {/* OMBRAGE */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* HEADER */}
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

      {/* CONTENU PRINCIPAL */}
      <main className="relative z-10 px-10 py-8 w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-center ml-[-110px]">
          Choisis ton KVK Dashboard
        </h1>
        <p className="mb-10 text-center">
          
        </p>

        <section className="flex w-full max-w-[1200px] gap-6">
          {/* Grand rectangle gauche */}
          <Link
            href="https://lookerstudio.google.com/reporting/48713b01-bb57-4a6a-8096-2a1d9e0d9aaf"
            className="group md:w-[350px] w-full mt-[-140px] ml-[-80px]"
          >
            <div className="bg-white/5 backdrop-blur-md hover:bg-white/10 transition rounded-2xl shadow-md hover:shadow-xl p-4 cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src="/periode3.png"
                  alt="Image gauche"
                  className="w-full h-[530px] object-cover transform transition-transform duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              <h2 className="text-xl font-bold text-white">Stats KVK en cours</h2>
            </div>
          </Link>

          {/* Colonne droite : Carrousel */}
          <div className="flex flex-col items-center w-full md:w-[700px] mt-[-10px] ml-[-70px]">
            <div className="flex gap-6 justify-center w-full max-w-[700px]">
              {rightRects.map((rect, index) => (
                <Link
                  key={index}
                  href={rect.href}
                  className={`group cursor-pointer rounded-2xl shadow-md p-2 transition
                    ${index === selectedIndex ? "bg-white/20" : "bg-white/10"}
                    hover:bg-white/30`}
                  onClick={() => setSelectedIndex(index)}
                  style={{
                    width: "180px",
                    height: "360px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="overflow-hidden rounded-xl flex-grow mb-2">
                    <img
                      src={rect.src}
                      alt={rect.alt}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      style={{ height: "280px", width: "100%" }}
                    />
                  </div>
                  <h3 className="text-sm font-bold text-white text-center truncate">
                    {rect.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
