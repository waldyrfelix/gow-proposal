"use client";

import Button from "./button";

export default function DownloadButton() {
  return (
    <Button
      title="Baixar proposta"
      onClick={() => document.getElementById("proposal")}
    >
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        className="w-5 h-5"
      >
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
      </svg>
    </Button>
  );
}
