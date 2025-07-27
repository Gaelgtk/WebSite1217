"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Link from "next/link";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function Periode1() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const SHEET_URL =
    "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLg2AFcCh-3MsPEoJpyNS54DmabPwiBC5Q025d7oE3T84WxFyPPvo9iuRQhZJRwlZW7YmjrnVRgDigb7gCDU5LS0fGBg00plNbyoWI5tg5E939IblLK4B7Owix9729efberyeQftSuTptf_p6c5QfEOt4FvXu6o-ESTgnr6GfYqIJik6vw2f3ccgpfIQ6NnLGkXATlUU9hLJvPgD3Ai25azCp5N1RWAhQr0sHIF6sGH1hjEvikUClAFD1OO5TGGQQqQxsF-MdHqtIzvhsC-wTcGiVld7Cw&lib=MXiiNNLJ7CM9rtDrK7eZrzP2qRVRSiemN";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(SHEET_URL);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Erreur de chargement des données :", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-10 text-center text-white">Chargement...</div>;
  if (!data || !Array.isArray(data)) return <div className="p-10 text-center text-white">Données invalides.</div>;

  const labels = data.slice(1).map((row: any[]) => row[0]);
  const points = data.slice(1).map((row: any[]) => row[1]);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Kill Points",
        data: points,
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Kill Points pendant le KVK 1" },
    },
  };

  return (
    <div
      className="min-h-screen relative text-white"
      style={{
        background: "linear-gradient(to bottom, #004466, #000435)",
      }}
    >
      {/* HEADER BAR */}
      <header className="w-full px-6 py-4 flex items-center justify-between z-10">
        <h2 className="text-2xl font-bold">1217 Website</h2>
        <nav className="flex gap-6 text-xl font-bold">
          <Link href="/" className="hover:bg-white/10 px-3 py-2 rounded transition">Accueil</Link>
          <Link href="#" className="hover:bg-white/10 px-3 py-2 rounded transition">KVK</Link>
          <Link href="#" className="hover:bg-white/10 px-3 py-2 rounded transition">Calendrier</Link>
          <Link href="/statistiques" className="hover:bg-white/10 px-3 py-2 rounded text-yellow-300 transition">Statistiques</Link>
        </nav>
      </header>

      {/* CONTENU PRINCIPAL */}
      <div className="p-10 pt-28">
        <Link href="/statistiques" className="text-blue-300 underline mb-4 inline-block">
          ← Retour aux statistiques
        </Link>

        <h1 className="text-3xl font-bold mb-6">Statistiques - KVK 1</h1>

        <div className="bg-white p-6 rounded-xl shadow-lg text-black">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
}
