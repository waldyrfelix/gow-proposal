import GoogleDocumentViewer from "../../../components/googleDocumentViewer";

export default function Viewer({ pid }) {
  console.log(pid);

  return (
    <main className="w-full">
      <GoogleDocumentViewer gid="2PACX-1vTR1cFG9UNqcAsPXCWV6CJLSSAIAUdDgsv6pnQLtBKbF9W4axfcUYMDQF40HysJX93vaPJnMbtbQ0L-" />
    </main>
  );
}
