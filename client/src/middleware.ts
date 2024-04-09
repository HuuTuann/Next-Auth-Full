import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authPaths = ["/auth/login", "/auth/register"];
const publicPaths = ["/"];
const privatePaths = ["/private"];

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const sessionToken = req.cookies.get("sessionToken")?.value;

  // if (authPaths.includes(pathname) && sessionToken) {
  //   return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  // }

  // if (privatePaths.includes(pathname) && !sessionToken) {
  //   return NextResponse.redirect(new URL("/auth/login", req.nextUrl.origin));
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/auth/login", "/auth/register", "/private"],
};
