import GoogleDocumentViewer from "../../../components/googleDocumentViewer";

const Viewer = async ({ params }) => {
  const { pid } = params;

  return <GoogleDocumentViewer gid={pid} />;
};

export default Viewer;
