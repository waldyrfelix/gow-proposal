import GoogleService from "../services/service";

async function getDocument(googleId: string) {
  const googleService = new GoogleService();
  return await googleService.getDoc(googleId);
}

async function GoogleDocumentViewer({ gid }) {
  const htmlData = await getDocument(gid);

  return <div dangerouslySetInnerHTML={{ __html: htmlData }}></div>;
}

export default GoogleDocumentViewer;
