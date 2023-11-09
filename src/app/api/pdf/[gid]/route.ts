import { NextRequest, NextResponse } from "next/server";
import GoogleService from "../../../../services/service";

export async function GET(request: NextRequest, { params }) {
  const { gid } = params;

  const gservice = new GoogleService();
  const { name, data } = await gservice.getPdf(gid);

  return new NextResponse(data, {
    status: 200,
    headers: [
      ["Content-Type", "application/pdf"],
      ["Content-Disposition", `attachment; filename=${name}.pdf`],
    ],
  });
}
