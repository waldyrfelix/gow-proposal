import React from "react";
import "tailwindcss/tailwind.css";
import PrintButton from "../../../components/printButton";
import HomeButton from "../../../components/homeButton";
import DownloadButton from "../../../components/downloadButton";
import FrameDoc from "./frameDoc";

export default function Home({ params }) {
  const { pid } = params;

  return (
    <>
      <header className="sticky top-0 z-50 p-2 bg-stone-100/60">
        <nav className="max-w-4xl mx-auto">
          <div className="flex gap-3">
            <HomeButton></HomeButton>
            <PrintButton></PrintButton>
            <DownloadButton></DownloadButton>
          </div>
        </nav>
      </header>
      <main className="relative max-w-4xl mx-auto">
        <FrameDoc src={`/viewer/${pid}`}></FrameDoc>
      </main>
      <footer className="text-sm text-center text-stone-500 p-5">
        &copy; 2023 Gow Solutions, todos os direitos reservados.
      </footer>
    </>
  );
}
