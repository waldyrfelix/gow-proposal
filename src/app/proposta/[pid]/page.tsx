import React from "react";
import "tailwindcss/tailwind.css";
import PrintButton from "../../../components/printButton";
import HomeButton from "../../../components/homeButton";
import GoogleDocumentViewer from "../../../components/googleDocumentViewer";
import DownloadButton from "../../../components/downloadButton";

export default function Home({ pid }) {
  return (
    <>
      <header>
        <nav className="max-w-3xl mx-auto">
          <div className="m-5 flex gap-3">
            <HomeButton></HomeButton>
            <PrintButton></PrintButton>
            <DownloadButton></DownloadButton>
          </div>
        </nav>
      </header>
      <main className="flex justify-center max-w-3xl mx-auto">
        <GoogleDocumentViewer gid="2PACX-1vTR1cFG9UNqcAsPXCWV6CJLSSAIAUdDgsv6pnQLtBKbF9W4axfcUYMDQF40HysJX93vaPJnMbtbQ0L-" />
      </main>
    </>
  );
}
