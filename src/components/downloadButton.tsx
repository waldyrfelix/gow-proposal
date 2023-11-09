"use client";

import Button from "./button";

export default function DownloadButton() {
  function onClickHandle() {
    const { pathname } = window.location;
    const url = pathname.replaceAll("proposta", "api/pdf");
    window.location.href = url;
  }

  return (
    <Button title="Baixar proposta" onClick={onClickHandle}>
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
