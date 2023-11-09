"use client";

import { useState } from "react";

export default function FrameDoc({ src }) {
  const [loading, setLoading] = useState(true);

  function onLoadHandle(event) {
    setLoading(false);

    const frame = event.target;

    frame.width = frame.contentWindow.document.body.scrollWidth + 35;
    frame.height = frame.contentWindow.document.body.scrollHeight + 35;
  }

  return (
    <>
      <div className="bg-white border border-stone-300 shadow-md">
        {loading ? (
          <div className="p-10 text-sm">Carregando documento...</div>
        ) : null}
        <iframe
          src={src}
          width={800}
          height={800}
          onLoad={onLoadHandle}
        ></iframe>
      </div>
    </>
  );
}
