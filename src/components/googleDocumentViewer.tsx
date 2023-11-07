"use client";

export default function GoogleDocumentViewer({ gid }) {
  const documentURL = `https://docs.google.com/document/d/e/${gid}/pub?embedded=true&rm=minimal&print=true`;

  function resizeFrame(event) {
    const frame = event.target;
    // frame.width = frame.contentWindow.document.body.scrollWidth;
    // frame.height = frame.contentWindow.document.body.scrollHeight;
    // frame.styles = ''
  }

  return (
    <iframe
      id="proposal"
      src={documentURL}
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      width={"100%"}
      height={2000}
      onLoad={resizeFrame}
    />
  );
}
