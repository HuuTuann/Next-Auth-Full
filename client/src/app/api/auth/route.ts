import { cookies } from "next/headers";

export async function POST(req: Request) {
  const cookies = req.headers.get("cookie");
}
