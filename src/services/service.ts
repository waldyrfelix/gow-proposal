import { google } from "googleapis";

export default class GoogleService {
  async getPdf(gid: string): Promise<any> {
    const drive = google.drive({
      version: "v3",
      auth: process.env.GOOGLE_API_KEY,
      http2: true,
    });

    const {
      data: { name },
    } = await drive.files.get({ fileId: gid });

    const { data } = await drive.files.export(
      {
        fileId: gid,
        mimeType: "application/pdf",
      },
      {
        // Make sure we get the binary data
        responseType: "stream",
      }
    );

    return { data, name };
  }

  async getDoc(gid: string): Promise<string> {
    const drive = google.drive({
      version: "v3",
      auth: process.env.GOOGLE_API_KEY,
      http2: true,
    });

    const response = await drive.files.export({
      fileId: gid,
      mimeType: "text/html",
    });

    return response.data as string;
  }
}
