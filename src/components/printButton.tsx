"use client";

import Button from "./button";

export default function PrintButton() {
  const printIframe = () => {
    var id = "proposal";
    var iframe = window.frames
      ? window.frames[id]
      : document.getElementById(id);

    var newWin = window.open(iframe.src);
    newWin?.print();
    // iframe = iframe.contentWindow || iframe;

    // print();

    return false;
  };

  return (
    <>
      <Button title="Imprimir proposta" onClick={printIframe}>
        <svg
          fill="currentColor"
          viewBox="0 0 16 16"
          className="w-5 h-5"
          aria-hidden="true"
          focusable="false"
          role="image"
        >
          <path d="M2.5 8a.5.5 0 100-1 .5.5 0 000 1z" />
          <path d="M5 1a2 2 0 00-2 2v2H2a2 2 0 00-2 2v3a2 2 0 002 2h1v1a2 2 0 002 2h6a2 2 0 002-2v-1h1a2 2 0 002-2V7a2 2 0 00-2-2h-1V3a2 2 0 00-2-2H5zM4 3a1 1 0 011-1h6a1 1 0 011 1v2H4V3zm1 5a2 2 0 00-2 2v1H2a1 1 0 01-1-1V7a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1h-1v-1a2 2 0 00-2-2H5zm7 2v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3a1 1 0 011-1h6a1 1 0 011 1z" />
        </svg>
      </Button>
    </>
  );
}
